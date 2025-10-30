# Output values for Azure App Service deployment
# Outputs are in alphabetical order as per best practices

output "app_service_default_hostname" {
  description = "Default hostname of the App Service"
  value       = azurerm_linux_web_app.main.default_hostname
}

output "app_service_id" {
  description = "ID of the App Service"
  value       = azurerm_linux_web_app.main.id
}

output "app_service_name" {
  description = "Name of the App Service"
  value       = azurerm_linux_web_app.main.name
}

output "app_service_outbound_ip_addresses" {
  description = "Outbound IP addresses of the App Service"
  value       = azurerm_linux_web_app.main.outbound_ip_addresses
}

output "app_service_plan_id" {
  description = "ID of the App Service Plan"
  value       = azurerm_service_plan.main.id
}

output "app_service_principal_id" {
  description = "Principal ID of the App Service Managed Identity (if enabled)"
  value       = var.enable_managed_identity ? azurerm_linux_web_app.main.identity[0].principal_id : null
}

output "app_service_url" {
  description = "URL of the deployed App Service"
  value       = "https://${azurerm_linux_web_app.main.default_hostname}"
}

output "application_insights_app_id" {
  description = "Application ID of Application Insights"
  value       = azurerm_application_insights.main.app_id
}

output "application_insights_connection_string" {
  description = "Connection string for Application Insights"
  value       = azurerm_application_insights.main.connection_string
  sensitive   = true
}

output "application_insights_instrumentation_key" {
  description = "Instrumentation key for Application Insights"
  value       = azurerm_application_insights.main.instrumentation_key
  sensitive   = true
}

output "custom_domain_verification_id" {
  description = "Custom domain verification ID for the App Service"
  value       = azurerm_linux_web_app.main.custom_domain_verification_id
}

output "resource_group_name" {
  description = "Name of the Resource Group"
  value       = azurerm_resource_group.main.name
}

output "staging_slot_hostname" {
  description = "Default hostname of the staging slot (if enabled)"
  value       = var.enable_staging_slot ? azurerm_linux_web_app_slot.staging[0].default_hostname : null
}

output "staging_slot_url" {
  description = "URL of the staging slot (if enabled)"
  value       = var.enable_staging_slot ? "https://${azurerm_linux_web_app_slot.staging[0].default_hostname}" : null
}
