# HCP Terraform (Terraform Cloud) backend configuration
# This enables remote state management and collaborative workflows
#
# Prerequisites:
# 1. Create an HCP Terraform account at https://app.terraform.io
# 2. Create an organization in HCP Terraform
# 3. Replace <HCP_TERRAFORM_ORG> with your organization name
# 4. Authenticate with: terraform login
#
# The workspace will be created automatically on first run

terraform {
  cloud {
    organization = "<HCP_TERRAFORM_ORG>"  # Replace with your HCP Terraform organization name

    workspaces {
      name = "copilot-travel-agent-demo"  # Workspace name matching the GitHub repo
    }
  }
}
