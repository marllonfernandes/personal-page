# Personal Page Project

This project is a modern personal page built with Vue.js 3 and Vite, designed for high performance and scalability on Google Cloud Platform (GCP).

## 🚀 Local Development

To run the project locally in development mode:

```bash
npm install
npm run dev
```

## ☁️ Deployment on Google Cloud Run

The service is deployed as a container using Google Cloud Build for the build process and Cloud Run for hosting (Serverless).

### 1. Build and Deploy
The command below builds the image from the source code and deploys it, restricting access to only via Load Balancer:

```bash
gcloud run deploy [SERVICE_NAME] \
    --source . \
    --project [PROJECT_ID] \
    --region [REGION] \
    --allow-unauthenticated \
    --ingress=internal-and-cloud-load-balancing \
    --min-instances 0 \
    --max-instances 2 \
    --port 8080
```

## 🛠️ Network Infrastructure (Load Balancer & SSL)

To configure a custom domain with automatic HTTPS, we follow the **Global External Application Load Balancer** architecture.

### Step-by-step infrastructure via gcloud:

1. **Reserve Global Static IP:**
```bash
gcloud compute addresses create [IP_NAME] --global --project [PROJECT_ID]
```

2. **Create Managed SSL Certificate:**
```bash
gcloud compute ssl-certificates create [CERT_NAME] --domains [YOUR_DOMAIN] --project [PROJECT_ID]
```

3. **Create Serverless Network Endpoint Group (NEG):**
```bash
gcloud compute network-endpoint-groups create [NEG_NAME] \
    --region=[REGION] \
    --network-endpoint-type=serverless \
    --cloud-run-service=[SERVICE_NAME] \
    --project [PROJECT_ID]
```

4. **Create Backend Service:**
```bash
gcloud compute backend-services create [BACKEND_NAME] --global --project [PROJECT_ID]
```

5. **Add NEG to Backend:**
```bash
gcloud compute backend-services add-backend [BACKEND_NAME] \
    --global \
    --network-endpoint-group=[NEG_NAME] \
    --network-endpoint-group-region=[REGION] \
    --project [PROJECT_ID]
```

6. **Create URL Map:**
```bash
gcloud compute url-maps create [URL_MAP_NAME] --default-service [BACKEND_NAME] --project [PROJECT_ID]
```

7. **Create HTTPS Proxy:**
```bash
gcloud compute target-https-proxies create [PROXY_NAME] \
    --url-map [URL_MAP_NAME] \
    --ssl-certificates [CERT_NAME] \
    --project [PROJECT_ID]
```

8. **Create Forwarding Rule:**
```bash
gcloud compute forwarding-rules create [FORWARDING_RULE_NAME] \
    --address [IP_NAME] \
    --global \
    --target-https-proxy [PROXY_NAME] \
    --ports 443 \
    --project [PROJECT_ID]
```

### 🔍 Verification Commands

**Get the IP for DNS (A Record):**
```bash
gcloud compute addresses describe [IP_NAME] --global --format="value(address)" --project [PROJECT_ID]
```

**Check SSL Certificate Status:**
```bash
gcloud compute ssl-certificates describe [CERT_NAME] --global --project [PROJECT_ID] --format="get(managed.status)"
```

## 🔐 Configuration (.env)

The project uses environment variables for the contact link and analytics. Create a `.env` file in the root:

- `VITE_WHATSAPP_NUMBER`: [YOUR_PHONE_NUMBER_HERE]
- `VITE_GA_ID`: [YOUR_GA_ID_HERE]
