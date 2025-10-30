# Input variables for Azure App Service deployment
# Variables are in alphabetical order as per best practices

variable "additional_app_settings" {
  description = "Additional application settings to add to the App Service"
  type        = map(string)
  default     = {}
}

variable "always_on" {
  description = "Should the App Service be always on? (Requires Basic tier or higher)"
  type        = bool
  default     = true
}

variable "app_service_name" {
  description = "Name of the App Service (must be globally unique)"
  type        = string
  default     = "travel-app"
}

variable "app_service_plan_name" {
  description = "Name of the App Service Plan"
  type        = string
  default     = "travel-app-plan"
}

variable "app_service_plan_sku" {
  description = "SKU for the App Service Plan (e.g., B1, S1, P1v2, P2v3)"
  type        = string
  default     = "B1"
}

variable "application_insights_name" {
  description = "Name of the Application Insights instance"
  type        = string
  default     = "travel-app-insights"
}

variable "cors_allowed_origins" {
  description = "List of allowed origins for CORS"
  type        = list(string)
  default     = ["*"]
}

variable "custom_domain_name" {
  description = "Custom domain name for the App Service (leave empty to skip)"
  type        = string
  default     = ""
}

variable "docker_image_name" {
  description = "Docker image name with tag (e.g., ghcr.io/ravi-cheetiralaav/copilot-travel-agent-demo:main)"
  type        = string
  default     = "ghcr.io/ravi-cheetiralaav/copilot-travel-agent-demo:main"
}

variable "docker_registry_url" {
  description = "Docker registry URL (e.g., https://ghcr.io)"
  type        = string
  default     = "https://ghcr.io"
}

variable "enable_cors" {
  description = "Enable CORS configuration"
  type        = bool
  default     = false
}

variable "enable_managed_certificate" {
  description = "Enable managed certificate for custom domain"
  type        = bool
  default     = false
}

variable "enable_managed_identity" {
  description = "Enable System Assigned Managed Identity for the App Service"
  type        = bool
  default     = true
}

variable "enable_staging_slot" {
  description = "Enable staging deployment slot"
  type        = bool
  default     = false
}

variable "location" {
  description = "Azure region for all resources"
  type        = string
  default     = "eastus"
}

variable "log_analytics_workspace_name" {
  description = "Name of the Log Analytics Workspace"
  type        = string
  default     = "travel-app-logs"
}

variable "log_retention_days" {
  description = "Number of days to retain logs in Log Analytics"
  type        = number
  default     = 30
}

variable "resource_group_name" {
  description = "Name of the Azure Resource Group"
  type        = string
  default     = "travel-app-rg"
}

variable "tags" {
  description = "Tags to apply to all resources"
  type        = map(string)
  default = {
    Environment = "production"
    ManagedBy   = "Terraform"
    Application = "TravelApp"
  }
}
