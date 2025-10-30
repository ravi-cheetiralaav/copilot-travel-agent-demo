# Quick Start Guide - Deploy to Azure App Service

**Time to deploy: ~10 minutes**

## Prerequisites Checklist

- [ ] Azure account with active subscription
- [ ] Azure CLI installed and authenticated (`az login`)
- [ ] Terraform installed (v1.0+)
- [ ] Docker image built and pushed to registry

## 5-Minute Deployment

### 1. Configure Variables

```bash
cd terraform
cp terraform.tfvars.example terraform.tfvars
```

Edit `terraform.tfvars` - **MUST change**:
```hcl
app_service_name = "travel-app-unique-12345"  # Must be globally unique!
```

### 2. Authenticate with Azure

```bash
az login
az account set --subscription "YOUR_SUBSCRIPTION_ID"
```

### 3. Deploy

```bash
# Option A: With HCP Terraform (recommended)
# 1. Edit backend.tf and set your organization name
# 2. Run: terraform login
terraform init
terraform apply

# Option B: With local state
# 1. Remove or comment out backend.tf
terraform init
terraform apply
```

### 4. Access Your App

```bash
terraform output app_service_url
# Opens: https://travel-app-unique-12345.azurewebsites.net
```

## Common Commands

```bash
# View all outputs
terraform output

# View specific output
terraform output app_service_url

# Check logs
az webapp log tail \
  --name $(terraform output -raw app_service_name) \
  --resource-group $(terraform output -raw resource_group_name)

# Update configuration
# 1. Edit terraform.tfvars
# 2. Run: terraform apply

# Destroy everything
terraform destroy
```

## Configuration Options

### Essential Variables

| Variable | Required | Default | Description |
|----------|----------|---------|-------------|
| `app_service_name` | ✅ | `travel-app` | Must be globally unique |
| `location` | ❌ | `eastus` | Azure region |
| `app_service_plan_sku` | ❌ | `B1` | B1, S1, P1v2, etc. |
| `docker_image_name` | ❌ | GitHub image | Your Docker image |

### Optional Features

```hcl
# Enable staging slot
enable_staging_slot = true

# Custom domain
custom_domain_name         = "www.example.com"
enable_managed_certificate = true

# Additional environment variables
additional_app_settings = {
  "MY_API_KEY" = "value"
}
```

## Troubleshooting

### ❌ "App Service name already exists"

Change `app_service_name` in `terraform.tfvars` to a unique value.

### ❌ "Authentication failed"

```bash
az login
az account show
```

### ❌ "Docker image not found"

Verify image exists and is accessible:
```bash
docker pull <your-image>
```

### ❌ "App not starting"

Check logs:
```bash
az webapp log tail --name <app-name> --resource-group <rg-name>
```

## Cost Estimates

- **B1 (Basic)**: ~$13/month - Good for dev/test
- **S1 (Standard)**: ~$70/month - Good for production
- **P1v2 (Premium)**: ~$85/month - Best performance

Plus minimal costs for Application Insights (~$2-5/month).

## Next Steps

- [ ] Configure custom domain
- [ ] Set up alerts in Application Insights
- [ ] Enable auto-scaling for production
- [ ] Integrate with Azure Key Vault for secrets
- [ ] Set up CI/CD pipeline

## Need Help?

- 📖 Full documentation: See `README.md` in this directory
- 🚀 Deployment guide: See `../DEPLOYMENT.md`
- 🔧 Terraform docs: [terraform.io](https://www.terraform.io/docs)
- ☁️ Azure docs: [docs.microsoft.com/azure/app-service](https://docs.microsoft.com/azure/app-service)
