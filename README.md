# DevOps Project – Production Ready Application Deployment

## Project Overview

This project demonstrates a simple production-ready DevOps workflow using modern DevOps tools and practices.

The application was containerized using Docker, deployed on AWS EC2, automated with GitHub Actions CI/CD pipeline, and provisioned using Terraform Infrastructure as Code.

---

## Technologies Used

- AWS EC2
- Docker
- GitHub Actions
- Terraform
- Node.js
- Git & GitHub

---

## Architecture Overview

The workflow follows this process:

Developer → GitHub Repository → GitHub Actions CI/CD → AWS EC2 → Docker Container → End Users

Architecture diagram is included in the repository.

---

## Infrastructure as Code (Terraform)

Terraform was used to provision AWS infrastructure programmatically instead of manually creating resources through the AWS Console.

Terraform features used:
- AWS Provider
- EC2 Instance Provisioning
- Infrastructure Planning & Apply

---

## CI/CD Pipeline

GitHub Actions was used to automate the CI/CD workflow.

Pipeline stages include:
- Code checkout
- Dependency installation
- Basic application testing
- Docker image build

The pipeline automatically runs whenever code is pushed to the main branch.

---

## Containerization

Docker was used to containerize the Node.js application for consistency across environments.

Docker features implemented:
- Dockerfile
- Containerized deployment
- Port mapping

---

## Cloud Deployment

The application was deployed on AWS EC2 Ubuntu Server instance.

Deployment process included:
- EC2 provisioning
- Docker installation
- Container deployment
- Public web access configuration

---

## Monitoring & Logging

Basic monitoring and logging were implemented using:
- Docker container logs
- AWS EC2 monitoring capabilities

Future improvements may include:
- AWS CloudWatch integration
- Automated alerting
- Centralized logging

---

## Project Structure

```bash
devops-project/
│
├── .github/workflows/
├── Terraform/
├── README.md
├── Dockerfile
├── index.js
├── package.json
└── architecture-diagram.png
```

---

## Deployment Steps

1. Clone the repository
2. Install dependencies
3. Build Docker image
4. Run Docker container
5. Provision infrastructure using Terraform
6. Deploy application to AWS EC2

---

## Design Decisions

- EC2 was chosen for simplicity and easier management
- Docker was used for environment consistency
- GitHub Actions was selected for lightweight CI/CD automation
- Terraform was used to support Infrastructure as Code principles

---

## Assumptions Made

- AWS account already exists
- Docker and Terraform are installed locally
- GitHub repository access is available

---

## Limitations

Current limitations include:
- No advanced load balancing
- No Kubernetes orchestration
- Basic monitoring only
- Manual EC2 Docker deployment

---

## Future Improvements

Potential improvements:
- Full automated deployment to EC2
- Kubernetes deployment
- AWS CloudWatch integration
- HTTPS with reverse proxy
- Advanced automated testing

---

## Author

Samuel Olayinka Victor
