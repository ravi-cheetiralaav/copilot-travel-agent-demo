# Terraform version and provider configuration
# Provider: hashicorp/azurerm (Azure Resource Manager)
# Latest version will be resolved from the Terraform Registry

terraform {
  required_version = ">= 1.0"

  required_providers {
    azurerm = {
      source  = "hashicorp/azurerm"
      version = "~> 4.0"
    }
  }
}
