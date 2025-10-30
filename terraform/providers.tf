# Provider configuration for Azure
provider "azurerm" {
  features {
    resource_group {
      prevent_deletion_if_contains_resources = false
    }

    log_analytics_workspace {
      permanently_delete_on_destroy = true
    }
  }

  # Authentication will be handled via Azure CLI, Service Principal, or Managed Identity
  # Set these environment variables for authentication:
  # - ARM_CLIENT_ID
  # - ARM_CLIENT_SECRET
  # - ARM_SUBSCRIPTION_ID
  # - ARM_TENANT_ID
  # 
  # Or use Azure CLI: az login
}
