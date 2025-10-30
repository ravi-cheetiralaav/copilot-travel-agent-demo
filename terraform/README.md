# Terraform Infrastructure for TravelApp on Azure

This directory contains Terraform Infrastructure as Code (IaC) to deploy the TravelApp Next.js application to Azure App Service.

## 🏗️ Architecture

The infrastructure includes:

- **Resource Group**: Container for all Azure resources
- **App Service Plan**: Linux-based plan with configurable SKU (default: B1)
- **App Service**: Web app configured for Docker containers
- **Application Insights**: Application monitoring and telemetry
- **Log Analytics Workspace**: Centralized logging
- **Staging Slot** (optional): For blue-green deployments
- **Custom Domain & SSL** (optional): Managed certificate support

## 📋 Prerequisites

1. **Azure Account**: Active Azure subscription
2. **Terraform**: Version 1.0 or later ([Download](https://www.terraform.io/downloads))
3. **Azure CLI**: For authentication ([Install](https://docs.microsoft.com/en-us/cli/azure/install-azure-cli))
4. **Docker Image**: Application must be built and pushed to a container registry (GitHub Container Registry by default)

## 🚀 Quick Start

### 1. Authenticate with Azure

```bash
# Login to Azure
az login

# Set your subscription (if you have multiple)
az account set --subscription "YOUR_SUBSCRIPTION_ID"

# Verify authentication
az account show
```

### 2. Configure Backend (Optional but Recommended)

Edit `backend.tf` and replace `<HCP_TERRAFORM_ORG>` with your HCP Terraform organization name:

```hcl
terraform {
  cloud {
    organization = "your-org-name"  # Replace this
    workspaces {
      name = "copilot-travel-agent-demo"
    }
  }
}
```

If you don't want to use HCP Terraform, comment out or remove the `backend.tf` file to use local state.

### 3. Initialize Terraform

```bash
cd terraform
terraform init
```

### 4. Review and Customize Variables

Create a `terraform.tfvars` file to customize your deployment:

```hcl
# Required: Make sure this is globally unique
app_service_name = "my-travel-app-unique-name"

# Azure region
location = "eastus"

# Resource names
resource_group_name         = "travel-app-rg"
app_service_plan_name       = "travel-app-plan"
application_insights_name   = "travel-app-insights"
log_analytics_workspace_name = "travel-app-logs"

# App Service Plan SKU (B1, B2, B3, S1, S2, S3, P1v2, P2v3, etc.)
app_service_plan_sku = "B1"

# Docker image configuration
docker_image_name    = "ghcr.io/ravi-cheetiralaav/copilot-travel-agent-demo:main"
docker_registry_url  = "https://ghcr.io"

# Optional: Enable staging slot for blue-green deployments
enable_staging_slot = false

# Optional: Custom domain
custom_domain_name           = ""  # e.g., "www.example.com"
enable_managed_certificate   = false

# Tags
tags = {
  Environment = "production"
  ManagedBy   = "Terraform"
  Application = "TravelApp"
  Team        = "DevOps"
}

# Additional app settings (optional)
additional_app_settings = {
  # Add any custom environment variables here
  # "MY_CUSTOM_VAR" = "value"
}
```

### 5. Plan and Apply

```bash
# Review the execution plan
terraform plan

# Apply the changes
terraform apply

# Or apply without confirmation prompt
terraform apply -auto-approve
```

### 6. Access Your Application

After successful deployment, Terraform will output the App Service URL:

```bash
# Get the URL
terraform output app_service_url

# Example output: https://my-travel-app-unique-name.azurewebsites.net
```

## 📝 Configuration Variables

### Required Variables

| Variable | Description | Default |
|----------|-------------|---------|
| `app_service_name` | Name of the App Service (must be globally unique) | `travel-app` |

### Core Configuration

| Variable | Description | Default |
|----------|-------------|---------|
| `location` | Azure region | `eastus` |
| `resource_group_name` | Resource group name | `travel-app-rg` |
| `app_service_plan_name` | App Service Plan name | `travel-app-plan` |
| `app_service_plan_sku` | Plan SKU (B1, S1, P1v2, etc.) | `B1` |
| `always_on` | Keep app always loaded | `true` |

### Docker Configuration

| Variable | Description | Default |
|----------|-------------|---------|
| `docker_image_name` | Docker image with tag | `ghcr.io/ravi-cheetiralaav/copilot-travel-agent-demo:main` |
| `docker_registry_url` | Registry URL | `https://ghcr.io` |

### Monitoring

| Variable | Description | Default |
|----------|-------------|---------|
| `application_insights_name` | Application Insights name | `travel-app-insights` |
| `log_analytics_workspace_name` | Log Analytics workspace name | `travel-app-logs` |
| `log_retention_days` | Log retention period | `30` |

### Optional Features

| Variable | Description | Default |
|----------|-------------|---------|
| `enable_staging_slot` | Enable staging deployment slot | `false` |
| `enable_managed_identity` | Enable System Assigned MI | `true` |
| `custom_domain_name` | Custom domain (leave empty to skip) | `""` |
| `enable_managed_certificate` | Enable managed SSL cert | `false` |
| `enable_cors` | Enable CORS | `false` |
| `cors_allowed_origins` | CORS allowed origins | `["*"]` |

## 🔧 Advanced Usage

### Using Private Container Registry

If your Docker image is in a private registry, you'll need to configure registry credentials:

```bash
# Set Docker registry credentials in App Service
az webapp config container set \
  --name <app-service-name> \
  --resource-group <resource-group-name> \
  --docker-custom-image-name <your-image> \
  --docker-registry-server-url <registry-url> \
  --docker-registry-server-user <username> \
  --docker-registry-server-password <password>
```

Or add them to `additional_app_settings`:

```hcl
additional_app_settings = {
  "DOCKER_REGISTRY_SERVER_USERNAME" = "your-username"
  "DOCKER_REGISTRY_SERVER_PASSWORD" = "your-password"
}
```

### Setting Up Continuous Deployment

The infrastructure is configured to support continuous deployment:

1. Enable webhook in your container registry
2. Configure the webhook URL to point to your App Service
3. App Service will automatically pull new images when pushed

### Custom Domain Setup

To add a custom domain:

1. Set the variables:
   ```hcl
   custom_domain_name         = "www.example.com"
   enable_managed_certificate = true
   ```

2. Before applying, add a CNAME record in your DNS:
   ```
   CNAME: www -> <app-service-name>.azurewebsites.net
   ```

3. Add TXT record for domain verification:
   ```
   TXT: asuid.www -> <custom-domain-verification-id>
   ```
   (Get the verification ID from `terraform output custom_domain_verification_id`)

4. Apply Terraform changes

### Staging Slot for Blue-Green Deployments

Enable staging slot for zero-downtime deployments:

```hcl
enable_staging_slot = true
```

Deploy new versions to staging, test, then swap:

```bash
# Swap staging to production
az webapp deployment slot swap \
  --resource-group <resource-group-name> \
  --name <app-service-name> \
  --slot staging \
  --target-slot production
```

## 📊 Outputs

After deployment, the following outputs are available:

```bash
# View all outputs
terraform output

# View specific output
terraform output app_service_url
terraform output application_insights_connection_string
```

| Output | Description |
|--------|-------------|
| `app_service_url` | URL of the deployed application |
| `app_service_name` | Name of the App Service |
| `app_service_default_hostname` | Default hostname |
| `app_service_id` | Azure resource ID |
| `application_insights_connection_string` | AppInsights connection string (sensitive) |
| `application_insights_instrumentation_key` | AppInsights key (sensitive) |
| `resource_group_name` | Resource group name |
| `staging_slot_url` | Staging slot URL (if enabled) |

## 🔒 Security Best Practices

1. **Secrets Management**:
   - Never commit sensitive values to version control
   - Use Azure Key Vault for secrets
   - Use environment variables or `terraform.tfvars` (add to `.gitignore`)

2. **Network Security**:
   - Enable HTTPS only (configured by default)
   - Configure CORS appropriately for your use case
   - Use private endpoints for production (not included in basic config)

3. **Identity & Access**:
   - Enable Managed Identity (default)
   - Use RBAC for access control
   - Rotate secrets regularly

4. **Monitoring**:
   - Application Insights is enabled by default
   - Review logs regularly
   - Set up alerts for critical issues

## 🧹 Cleanup

To destroy all created resources:

```bash
# Preview what will be destroyed
terraform plan -destroy

# Destroy all resources
terraform destroy

# Or without confirmation
terraform destroy -auto-approve
```

**Warning**: This will permanently delete all resources including logs and data.

## 🛠️ Troubleshooting

### App Service doesn't start

1. Check logs:
   ```bash
   az webapp log tail --name <app-service-name> --resource-group <resource-group-name>
   ```

2. Verify Docker image is accessible
3. Check Application Insights for errors

### Authentication errors

```bash
# Re-authenticate with Azure
az login
az account set --subscription "YOUR_SUBSCRIPTION_ID"
```

### State lock errors (HCP Terraform)

```bash
# Force unlock (use with caution)
terraform force-unlock <lock-id>
```

### Name already exists

The App Service name must be globally unique. Change `app_service_name` in your `terraform.tfvars`.

## 📚 Additional Resources

- [Azure App Service Documentation](https://docs.microsoft.com/en-us/azure/app-service/)
- [Terraform Azure Provider](https://registry.terraform.io/providers/hashicorp/azurerm/latest/docs)
- [HCP Terraform Documentation](https://developer.hashicorp.com/terraform/cloud-docs)
- [Next.js Deployment](https://nextjs.org/docs/deployment)

## 🤝 Contributing

When modifying this infrastructure:

1. Follow Terraform best practices
2. Update documentation
3. Test changes in a non-production environment
4. Use `terraform fmt` to format code
5. Use `terraform validate` to validate configuration

## 📄 License

This infrastructure code follows the same license as the main TravelApp project.
