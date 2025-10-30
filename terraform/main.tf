# Main Terraform configuration for deploying Next.js Travel App to Azure App Service
# This configuration creates:
# - Resource Group
# - App Service Plan (Linux-based)
# - App Service with Docker container support
# - Application Insights for monitoring

# Resource Group
resource "azurerm_resource_group" "main" {
  name     = var.resource_group_name
  location = var.location

  tags = var.tags
}

# App Service Plan (Linux-based for Docker containers)
resource "azurerm_service_plan" "main" {
  name                = var.app_service_plan_name
  location            = azurerm_resource_group.main.location
  resource_group_name = azurerm_resource_group.main.name
  os_type             = "Linux"
  sku_name            = var.app_service_plan_sku

  tags = var.tags
}

# Log Analytics Workspace for Application Insights
resource "azurerm_log_analytics_workspace" "main" {
  name                = var.log_analytics_workspace_name
  location            = azurerm_resource_group.main.location
  resource_group_name = azurerm_resource_group.main.name
  sku                 = "PerGB2018"
  retention_in_days   = var.log_retention_days

  tags = var.tags
}

# Application Insights
resource "azurerm_application_insights" "main" {
  name                = var.application_insights_name
  location            = azurerm_resource_group.main.location
  resource_group_name = azurerm_resource_group.main.name
  workspace_id        = azurerm_log_analytics_workspace.main.id
  application_type    = "Node.JS"

  tags = var.tags
}

# App Service (Web App)
resource "azurerm_linux_web_app" "main" {
  name                = var.app_service_name
  location            = azurerm_resource_group.main.location
  resource_group_name = azurerm_resource_group.main.name
  service_plan_id     = azurerm_service_plan.main.id
  https_only          = true

  site_config {
    always_on                         = var.always_on
    http2_enabled                     = true
    ftps_state                        = "Disabled"
    minimum_tls_version               = "1.2"
    use_32_bit_worker                 = false
    health_check_path                 = "/"
    health_check_eviction_time_in_min = 5

    application_stack {
      docker_image_name   = var.docker_image_name
      docker_registry_url = var.docker_registry_url
    }

    # CORS settings (optional - configure if needed)
    dynamic "cors" {
      for_each = var.enable_cors ? [1] : []
      content {
        allowed_origins     = var.cors_allowed_origins
        support_credentials = false
      }
    }
  }

  app_settings = local.app_settings

  # Configure Docker registry credentials if using private registry
  dynamic "identity" {
    for_each = var.enable_managed_identity ? [1] : []
    content {
      type = "SystemAssigned"
    }
  }

  tags = var.tags

  lifecycle {
    ignore_changes = [
      # Ignore changes to container image tag to allow CI/CD updates
      site_config[0].application_stack[0].docker_image_name,
    ]
  }
}

# Custom domain and SSL (optional)
resource "azurerm_app_service_custom_hostname_binding" "main" {
  count               = var.custom_domain_name != "" ? 1 : 0
  hostname            = var.custom_domain_name
  app_service_name    = azurerm_linux_web_app.main.name
  resource_group_name = azurerm_resource_group.main.name

  depends_on = [azurerm_linux_web_app.main]
}

# Managed Certificate (requires custom domain)
resource "azurerm_app_service_managed_certificate" "main" {
  count                      = var.custom_domain_name != "" && var.enable_managed_certificate ? 1 : 0
  custom_hostname_binding_id = azurerm_app_service_custom_hostname_binding.main[0].id

  depends_on = [azurerm_app_service_custom_hostname_binding.main]
}

# Bind certificate to hostname
resource "azurerm_app_service_certificate_binding" "main" {
  count               = var.custom_domain_name != "" && var.enable_managed_certificate ? 1 : 0
  hostname_binding_id = azurerm_app_service_custom_hostname_binding.main[0].id
  certificate_id      = azurerm_app_service_managed_certificate.main[0].id
  ssl_state           = "SniEnabled"

  depends_on = [azurerm_app_service_managed_certificate.main]
}

# Deployment slot (optional - for staging)
resource "azurerm_linux_web_app_slot" "staging" {
  count          = var.enable_staging_slot ? 1 : 0
  name           = "staging"
  app_service_id = azurerm_linux_web_app.main.id
  https_only     = true

  site_config {
    always_on           = false
    http2_enabled       = true
    ftps_state          = "Disabled"
    minimum_tls_version = "1.2"
    use_32_bit_worker   = false
    health_check_path   = "/"

    application_stack {
      docker_image_name   = var.docker_image_name
      docker_registry_url = var.docker_registry_url
    }
  }

  app_settings = local.app_settings

  tags = var.tags
}
