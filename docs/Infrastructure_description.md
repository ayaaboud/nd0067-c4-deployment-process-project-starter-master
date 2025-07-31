# Infrastructure Description

This project uses AWS to host a full-stack Udagram application consisting of:

- **RDS**: PostgreSQL database used to store user and image data.
- **Elastic Beanstalk (EB)**: Used to deploy and manage the backend Node.js API.
- **S3**: Used to host the frontend Angular application as a static website.

## Architecture Overview

- The backend is deployed on EB and connects to a publicly accessible RDS instance.
- The frontend is built and deployed to an S3 bucket configured for static web hosting.
- Environment variables are configured in both EB and CircleCI for secrets and deployment credentials.