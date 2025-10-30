# Deploying TravelApp to Azure App Service

This guide walks you through deploying the TravelApp Next.js application to Azure App Service using Terraform.

## Overview

The Terraform infrastructure in the `terraform/` directory creates:

- **Azure Resource Group**: Container for all resources
- **App Service Plan**: Linux-based hosting plan (configurable SKU)
- **App Service**: Web application hosting with Docker support
- **Application Insights**: Application monitoring and telemetry
- **Log Analytics Workspace**: Centralized logging
- **Optional**: Staging slot for blue-green deployments
- **Optional**: Custom domain with managed SSL certificate

## Prerequisites

Before you begin, ensure you have:

1. **Azure Account**: [Sign up for free](https://azure.microsoft.com/free/)
2. **Azure CLI**: [Install Azure CLI](https://docs.microsoft.com/en-us/cli/azure/install-azure-cli)
3. **Terraform**: Version 1.0+ ([Download](https://www.terraform.io/downloads))
4. **Docker Image**: The app must be built and pushed to a registry
5. **HCP Terraform Account** (optional): For remote state management

## Step 1: Build and Push Docker Image

The application needs to be containerized before deployment.

### Option A: Using GitHub Actions (Recommended)

The repository includes a GitHub Actions workflow that automatically builds and pushes images. Simply push to the `main` branch:

```bash
git push origin main
```

The image will be available at: `ghcr.io/ravi-cheetiralaav/copilot-travel-agent-demo:main`

### Option B: Build Locally

```bash
# Build the Docker image
docker build -t travel-app:latest .

# Tag for your registry
docker tag travel-app:latest <your-registry>/travel-app:latest

# Push to registry
docker push <your-registry>/travel-app:latest
```

## Step 2: Configure Azure Authentication

### Authenticate with Azure CLI

```bash
# Login to Azure
az login

# List subscriptions
az account list --output table

# Set active subscription
az account set --subscription "YOUR_SUBSCRIPTION_ID"

# Verify
az account show
```

### Alternative: Service Principal (CI/CD)

For automated deployments, create a service principal:

```bash
# Create service principal
az ad sp create-for-rbac \
  --name "terraform-deploy" \
  --role Contributor \
  --scopes /subscriptions/YOUR_SUBSCRIPTION_ID

# Note the output values for environment variables:
# ARM_CLIENT_ID=<appId>
# ARM_CLIENT_SECRET=<password>
# ARM_SUBSCRIPTION_ID=<subscription_id>
# ARM_TENANT_ID=<tenant>
```

## Step 3: Configure Terraform Variables

### Create `terraform/terraform.tfvars`

Copy the example file and customize:

```bash
cd terraform
cp terraform.tfvars.example terraform.tfvars
```

Edit `terraform.tfvars`:

```hcl
# IMPORTANT: Must be globally unique
app_service_name = "travel-app-prod-12345"

# Azure region
location = "eastus"

# Resource names
resource_group_name           = "travel-app-rg"
app_service_plan_name         = "travel-app-plan"
application_insights_name     = "travel-app-insights"
log_analytics_workspace_name  = "travel-app-logs"

# App Service Plan SKU
app_service_plan_sku = "B1"  # B1, B2, S1, S2, P1v2, etc.

# Docker configuration
docker_image_name   = "ghcr.io/ravi-cheetiralaav/copilot-travel-agent-demo:main"
docker_registry_url = "https://ghcr.io"

# Tags
tags = {
  Environment = "production"
  ManagedBy   = "Terraform"
  Application = "TravelApp"
}
```

## Step 4: Configure Backend (Optional)

### Option A: HCP Terraform (Recommended for Teams)

1. Create account at [https://app.terraform.io](https://app.terraform.io)
2. Create an organization
3. Edit `terraform/backend.tf`:

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

4. Login to HCP Terraform:

```bash
terraform login
```

### Option B: Azure Storage Backend

Edit `terraform/backend.tf`:

```hcl
terraform {
  backend "azurerm" {
    resource_group_name  = "terraform-state-rg"
    storage_account_name = "tfstatexxxxxx"  # Must be unique
    container_name       = "tfstate"
    key                  = "travel-app.tfstate"
  }
}
```

Create the storage account:

```bash
# Create resource group
az group create --name terraform-state-rg --location eastus

# Create storage account
az storage account create \
  --resource-group terraform-state-rg \
  --name tfstatexxxxxx \
  --sku Standard_LRS \
  --encryption-services blob

# Create container
az storage container create \
  --name tfstate \
  --account-name tfstatexxxxxx
```

### Option C: Local State (Not Recommended for Production)

Comment out or remove `terraform/backend.tf` to use local state file.

## Step 5: Deploy Infrastructure

### Initialize Terraform

```bash
cd terraform
terraform init
```

### Review the Plan

```bash
terraform plan
```

Review the output to ensure:
- Correct resources will be created
- Names are as expected
- No unexpected changes

### Apply Configuration

```bash
terraform apply
```

Type `yes` when prompted, or use `-auto-approve` for non-interactive deployments:

```bash
terraform apply -auto-approve
```

### Deployment Time

Initial deployment typically takes 5-10 minutes.

## Step 6: Verify Deployment

### Get Application URL

```bash
terraform output app_service_url
```

Example output: `https://travel-app-prod-12345.azurewebsites.net`

### Check Application

```bash
# Get the URL and open in browser
APP_URL=$(terraform output -raw app_service_url)
echo "Application URL: $APP_URL"

# Or use curl
curl -I $APP_URL
```

### View Application Logs

```bash
# Stream logs (replace values)
az webapp log tail \
  --name $(terraform output -raw app_service_name) \
  --resource-group $(terraform output -raw resource_group_name)
```

### Check Application Insights

```bash
# Get Application Insights details
terraform output application_insights_app_id

# View in Azure Portal
az monitor app-insights component show \
  --app $(terraform output -raw application_insights_app_id) \
  --resource-group $(terraform output -raw resource_group_name)
```

## Step 7: Post-Deployment Configuration

### Update Application Settings (Optional)

Add custom environment variables:

```bash
az webapp config appsettings set \
  --name $(terraform output -raw app_service_name) \
  --resource-group $(terraform output -raw resource_group_name) \
  --settings MY_CUSTOM_VAR="value"
```

Or update `terraform/terraform.tfvars`:

```hcl
additional_app_settings = {
  "MY_CUSTOM_VAR" = "value"
  "FEATURE_FLAG"  = "enabled"
}
```

Then apply:

```bash
terraform apply
```

### Configure Custom Domain (Optional)

1. Update `terraform.tfvars`:

```hcl
custom_domain_name         = "www.example.com"
enable_managed_certificate = true
```

2. Add DNS records:

```bash
# Get verification ID
VERIFY_ID=$(terraform output -raw custom_domain_verification_id)

# Add these DNS records:
# CNAME: www -> <app-service-name>.azurewebsites.net
# TXT: asuid.www -> $VERIFY_ID
```

3. Apply Terraform:

```bash
terraform apply
```

### Enable Staging Slot (Optional)

For blue-green deployments:

```hcl
enable_staging_slot = true
```

After applying, deploy to staging:

```bash
# Update staging slot
az webapp deployment slot auto-swap \
  --name $(terraform output -raw app_service_name) \
  --resource-group $(terraform output -raw resource_group_name) \
  --slot staging

# Manual swap
az webapp deployment slot swap \
  --name $(terraform output -raw app_service_name) \
  --resource-group $(terraform output -raw resource_group_name) \
  --slot staging \
  --target-slot production
```

## Continuous Deployment

### Option A: GitHub Actions with Terraform

Create `.github/workflows/deploy.yml`:

```yaml
name: Deploy to Azure

on:
  push:
    branches: [main]

jobs:
  deploy:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v4
      
      - name: Setup Terraform
        uses: hashicorp/setup-terraform@v3
        
      - name: Terraform Init
        run: |
          cd terraform
          terraform init
        env:
          TF_TOKEN_app_terraform_io: ${{ secrets.TF_API_TOKEN }}
          
      - name: Terraform Apply
        run: |
          cd terraform
          terraform apply -auto-approve
        env:
          TF_TOKEN_app_terraform_io: ${{ secrets.TF_API_TOKEN }}
          ARM_CLIENT_ID: ${{ secrets.ARM_CLIENT_ID }}
          ARM_CLIENT_SECRET: ${{ secrets.ARM_CLIENT_SECRET }}
          ARM_SUBSCRIPTION_ID: ${{ secrets.ARM_SUBSCRIPTION_ID }}
          ARM_TENANT_ID: ${{ secrets.ARM_TENANT_ID }}
```

### Option B: Webhook-based Deployment

Azure App Service automatically pulls new images when configured with webhooks. This is already enabled in the Terraform configuration via `DOCKER_ENABLE_CI = "true"`.

## Monitoring and Maintenance

### View Application Metrics

```bash
# In Azure Portal, navigate to:
# Resource Groups -> travel-app-rg -> Application Insights
```

### Check Resource Costs

```bash
# View current costs
az consumption usage list \
  --resource-group $(terraform output -raw resource_group_name)
```

### Scale App Service

Update `terraform.tfvars`:

```hcl
app_service_plan_sku = "S1"  # Scale up to Standard
```

Apply changes:

```bash
terraform apply
```

## Troubleshooting

### App Service Not Starting

1. Check logs:
   ```bash
   az webapp log tail --name <app-name> --resource-group <rg-name>
   ```

2. Verify Docker image is accessible

3. Check Application Insights for errors

### Terraform State Locked

```bash
# Force unlock (use with caution)
terraform force-unlock <lock-id>
```

### Authentication Failed

```bash
# Re-authenticate
az login
az account set --subscription "YOUR_SUBSCRIPTION_ID"
```

### Resource Name Conflicts

App Service names must be globally unique. Change `app_service_name` in `terraform.tfvars`.

## Cleanup

To remove all deployed resources:

```bash
# Preview destruction
terraform plan -destroy

# Destroy resources
terraform destroy

# Or without confirmation
terraform destroy -auto-approve
```

**Warning**: This permanently deletes all resources including data and logs.

## Cost Optimization Tips

1. **Use appropriate SKU**: Start with B1 ($13/month) and scale as needed
2. **Enable auto-scaling**: Only for production workloads
3. **Monitor resource usage**: Use Azure Cost Management
4. **Delete unused resources**: Run `terraform destroy` for dev environments
5. **Use reserved instances**: For production with predictable load

## Security Best Practices

1. **Enable HTTPS only**: ✅ Already configured
2. **Use managed identities**: ✅ Enabled by default
3. **Store secrets in Key Vault**: Recommended for production
4. **Enable network restrictions**: Consider VNet integration for production
5. **Regular updates**: Keep Docker images up to date
6. **Monitor alerts**: Configure Application Insights alerts

## Next Steps

- [ ] Configure custom domain
- [ ] Set up alerts in Application Insights
- [ ] Enable auto-scaling for production
- [ ] Integrate with Azure Key Vault for secrets
- [ ] Set up Azure Front Door for CDN and WAF
- [ ] Configure backup and disaster recovery
- [ ] Implement proper CI/CD pipeline

## Support

- **Terraform Documentation**: [terraform.io](https://www.terraform.io/docs)
- **Azure App Service**: [docs.microsoft.com/azure/app-service](https://docs.microsoft.com/azure/app-service)
- **Application Issues**: Check Application Insights
- **Infrastructure Issues**: Review Terraform state and Azure Portal

---

**Estimated Monthly Cost**: ~$13 USD (B1 tier) + minimal Application Insights and Log Analytics costs.

For production workloads, consider S1 tier ($70/month) or P1v2 tier ($85/month) for better performance and SLA.
