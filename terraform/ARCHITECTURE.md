# Azure App Service Architecture

This document describes the infrastructure architecture created by the Terraform configuration.

## Architecture Diagram

```
┌─────────────────────────────────────────────────────────────────┐
│                      Azure Subscription                          │
│                                                                   │
│  ┌──────────────────────────────────────────────────────────┐  │
│  │            Resource Group: travel-app-rg                  │  │
│  │                                                            │  │
│  │  ┌───────────────────────────────────────────────────┐   │  │
│  │  │   App Service Plan (Linux)                        │   │  │
│  │  │   - SKU: B1/S1/P1v2 (configurable)              │   │  │
│  │  │   - OS: Linux                                     │   │  │
│  │  │   - Docker container support                      │   │  │
│  │  └───────────────────────────────────────────────────┘   │  │
│  │           │                                                │  │
│  │           │                                                │  │
│  │           ▼                                                │  │
│  │  ┌───────────────────────────────────────────────────┐   │  │
│  │  │   App Service (Linux Web App)                     │   │  │
│  │  │   ┌─────────────────────────────────────────┐    │   │  │
│  │  │   │  Production Slot                         │    │   │  │
│  │  │   │  - Docker Image: ghcr.io/...            │    │   │  │
│  │  │   │  - HTTPS Only                           │    │   │  │
│  │  │   │  - Health Check: /                      │    │   │  │
│  │  │   │  - Port: 3000                           │    │   │  │
│  │  │   │  - Managed Identity: Enabled           │    │   │  │
│  │  │   └─────────────────────────────────────────┘    │   │  │
│  │  │   ┌─────────────────────────────────────────┐    │   │  │
│  │  │   │  Staging Slot (Optional)                │    │   │  │
│  │  │   │  - Same configuration as production     │    │   │  │
│  │  │   │  - For blue-green deployments          │    │   │  │
│  │  │   └─────────────────────────────────────────┘    │   │  │
│  │  └───────────────────────────────────────────────────┘   │  │
│  │           │                                                │  │
│  │           │ (logs & metrics)                               │  │
│  │           ▼                                                │  │
│  │  ┌───────────────────────────────────────────────────┐   │  │
│  │  │   Application Insights                            │   │  │
│  │  │   - Application monitoring                        │   │  │
│  │  │   - Performance metrics                           │   │  │
│  │  │   - Request tracing                               │   │  │
│  │  │   - Error tracking                                │   │  │
│  │  └───────────────────────────────────────────────────┘   │  │
│  │           │                                                │  │
│  │           ▼                                                │  │
│  │  ┌───────────────────────────────────────────────────┐   │  │
│  │  │   Log Analytics Workspace                         │   │  │
│  │  │   - Centralized logging                           │   │  │
│  │  │   - Retention: 30 days (configurable)            │   │  │
│  │  │   - Query and analysis                            │   │  │
│  │  └───────────────────────────────────────────────────┘   │  │
│  │                                                            │  │
│  │  ┌───────────────────────────────────────────────────┐   │  │
│  │  │   Custom Domain Binding (Optional)                │   │  │
│  │  │   - Custom domain: www.example.com               │   │  │
│  │  │   - Managed SSL Certificate                       │   │  │
│  │  │   - SNI-based SSL                                 │   │  │
│  │  └───────────────────────────────────────────────────┘   │  │
│  │                                                            │  │
│  └──────────────────────────────────────────────────────────┘  │
│                                                                   │
└─────────────────────────────────────────────────────────────────┘

                              │
                              │ Container pulls
                              ▼
                    ┌──────────────────────┐
                    │  Container Registry   │
                    │  (GitHub Packages)    │
                    │  ghcr.io/...         │
                    └──────────────────────┘
```

## Component Descriptions

### 1. Resource Group
- **Name**: `travel-app-rg` (configurable)
- **Purpose**: Logical container for all resources
- **Location**: `eastus` (configurable)

### 2. App Service Plan
- **Type**: Linux-based
- **SKU Options**:
  - **B1** (Basic): $13/month - Development/Testing
  - **S1** (Standard): $70/month - Small production workloads
  - **P1v2** (Premium): $85/month - Production with scaling
- **Features**:
  - Native Docker support
  - Always-on (for Basic tier and above)
  - Auto-scaling (Standard tier and above)

### 3. App Service (Linux Web App)
- **Configuration**:
  - Docker container deployment
  - HTTPS enforcement
  - Health check endpoint: `/`
  - Minimum TLS version: 1.2
  - HTTP/2 enabled
  - FTPS disabled
- **Environment Variables**:
  - `WEBSITES_PORT=3000`
  - `NODE_ENV=production`
  - `NEXT_TELEMETRY_DISABLED=1`
  - Application Insights connection strings
- **Security**:
  - System Assigned Managed Identity
  - HTTPS only
  - TLS 1.2 minimum

### 4. Application Insights
- **Type**: Node.JS application monitoring
- **Features**:
  - Real-time performance monitoring
  - Request/dependency tracking
  - Error and exception tracking
  - Custom metrics and events
  - Availability tests
  - Live metrics stream

### 5. Log Analytics Workspace
- **Purpose**: Backend for Application Insights
- **Configuration**:
  - SKU: PerGB2018
  - Retention: 30 days (configurable)
- **Features**:
  - Kusto Query Language (KQL) support
  - Cross-resource queries
  - Alert rules
  - Workbooks for visualization

### 6. Staging Slot (Optional)
- **Purpose**: Blue-green deployments
- **Features**:
  - Identical configuration to production
  - Separate URL for testing
  - Swap with production with zero downtime
  - Traffic routing for A/B testing

### 7. Custom Domain (Optional)
- **Features**:
  - Custom domain binding
  - Managed SSL certificate (free)
  - SNI-based SSL
  - Automatic certificate renewal

## Data Flow

1. **User Request** → Azure App Service URL (`https://<app-name>.azurewebsites.net`)
2. **App Service** → Pulls Docker image from Container Registry (on deployment)
3. **Container** → Runs Next.js application on port 3000
4. **Application** → Sends telemetry to Application Insights
5. **Application Insights** → Stores data in Log Analytics Workspace
6. **Health Check** → App Service monitors `/` endpoint every 5 minutes

## Deployment Flow

1. **Developer** pushes code to GitHub
2. **GitHub Actions** builds Docker image and pushes to GitHub Container Registry
3. **Webhook** (optional) triggers App Service to pull new image
4. **App Service** pulls new Docker image
5. **Container** is restarted with new image
6. **Health Check** validates application is running

## Network Configuration

### Inbound
- **HTTPS**: Port 443 (automatically configured)
- **HTTP**: Port 80 (redirects to HTTPS)
- **Source**: Public internet (default)
- **Custom**: Can be restricted with access restrictions

### Outbound
- **Destination**: Internet (for pulling Docker images, dependencies)
- **IP Addresses**: Dynamic (available via output variable)
- **Custom**: Can use VNet integration (not included in basic setup)

## Security Features

### Enabled by Default
- ✅ HTTPS only
- ✅ TLS 1.2 minimum
- ✅ System Assigned Managed Identity
- ✅ FTPS disabled
- ✅ HTTP/2 enabled
- ✅ Application Insights encryption at rest

### Optional/Recommended
- ⚠️ Custom domain with managed certificate
- ⚠️ Access restrictions (IP filtering)
- ⚠️ VNet integration
- ⚠️ Private endpoints
- ⚠️ Azure Key Vault integration
- ⚠️ Azure Front Door + WAF

## Monitoring and Observability

### Metrics Available
- Request rate and response time
- Failed requests
- CPU and memory usage
- Container restart count
- Data in/out

### Logs Available
- Application logs (stdout/stderr)
- HTTP logs
- Platform logs
- Application Insights telemetry

### Alerting
Can be configured in Application Insights for:
- High response time
- High error rate
- High CPU/memory usage
- Container restart
- Health check failures

## Scaling Options

### Vertical Scaling (Scale Up)
Change SKU in `terraform.tfvars`:
```hcl
app_service_plan_sku = "S1"  # or P1v2, P2v3, etc.
```

### Horizontal Scaling (Scale Out)
Available in Standard and Premium tiers:
- Manual scaling: Set instance count
- Auto-scaling: Based on metrics (CPU, memory, requests)

## Cost Breakdown

### Monthly Costs (Approximate)

| Component | Basic (B1) | Standard (S1) | Premium (P1v2) |
|-----------|-----------|---------------|----------------|
| App Service Plan | $13 | $70 | $85 |
| Application Insights | $2-5 | $2-5 | $2-5 |
| Log Analytics | $1-2 | $1-2 | $1-2 |
| **Total** | **~$16-20** | **~$73-77** | **~$88-92** |

*Costs are estimates and may vary based on usage and region*

## High Availability & Disaster Recovery

### Current Setup
- **SLA**: 99.95% (Basic and Standard tiers)
- **Backup**: Not included (can be enabled)
- **Geo-redundancy**: Not included

### Recommended for Production
- Premium tier: 99.95% SLA with better performance
- Azure Backup: Daily backups with retention
- Azure Site Recovery: Disaster recovery to secondary region
- Azure Front Door: Global load balancing and failover

## Compliance & Governance

### Tags
All resources are tagged with:
- `Environment`: production/staging/development
- `ManagedBy`: Terraform
- `Application`: TravelApp
- Custom tags via `tags` variable

### Resource Naming
- Consistent naming convention
- Environment-aware names
- Predictable resource identifiers

### Access Control
- Managed Identity for service-to-service authentication
- RBAC for user access management
- No credentials stored in application

## Maintenance

### Regular Tasks
- Monitor Application Insights for errors
- Review Log Analytics for patterns
- Update Docker images regularly
- Apply security patches
- Review and optimize costs

### Terraform Management
- State stored in HCP Terraform or Azure Storage
- Version control for infrastructure changes
- Plan before apply
- Regular `terraform refresh` to sync state

## Limitations

### Current Setup
- Single region deployment
- No VNet integration
- No private endpoints
- No Azure Front Door/CDN
- No automated backups
- No multi-region redundancy

### Can Be Added
All limitations above can be addressed by extending the Terraform configuration.

## Support

For issues related to:
- **Infrastructure**: Review Terraform state and Azure Portal
- **Application**: Check Application Insights and logs
- **Deployment**: Review GitHub Actions and Docker registry
- **Performance**: Review Application Insights performance metrics
