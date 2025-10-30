# Local values for common expressions
# These reduce repetition and make the code more maintainable

locals {
  # Common name prefix for resources
  name_prefix = var.app_service_name

  # Common tags merged with user-provided tags
  common_tags = merge(
    var.tags,
    {
      "terraform"        = "true"
      "deployment-date"  = timestamp()
    }
  )

  # App Settings that are always included
  base_app_settings = {
    "APPINSIGHTS_INSTRUMENTATIONKEY"             = azurerm_application_insights.main.instrumentation_key
    "APPLICATIONINSIGHTS_CONNECTION_STRING"      = azurerm_application_insights.main.connection_string
    "ApplicationInsightsAgent_EXTENSION_VERSION" = "~3"
    "DOCKER_ENABLE_CI"                           = "true"
    "WEBSITES_ENABLE_APP_SERVICE_STORAGE"        = "false"
    "WEBSITES_PORT"                              = "3000"
    "NODE_ENV"                                   = "production"
    "NEXT_TELEMETRY_DISABLED"                    = "1"
    "PORT"                                       = "3000"
    "HOSTNAME"                                   = "0.0.0.0"
  }

  # Merged app settings
  app_settings = merge(local.base_app_settings, var.additional_app_settings)
}
