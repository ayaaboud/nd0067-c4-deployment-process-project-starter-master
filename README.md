# Udagram Deployment Project

This project is the final submission for the Udacity Cloud DevOps Engineer Nanodegree. It demonstrates the deployment of a full-stack application called **Udagram**, which includes a frontend Angular app and a backend Node.js API.

## Project Overview

Udagram is an image sharing platform that allows users to register, log in, post images, and view feeds. The frontend is built with Angular and deployed on AWS S3, while the backend API is deployed on AWS Elastic Beanstalk and uses an AWS RDS PostgreSQL instance for data storage.

## Project Structure

```
.
├── udagram
│   ├── udagram-frontend      # Angular frontend
│   └── udagram-api           # Node.js backend API
├── .circleci
│   └── config.yml            # CircleCI pipeline configuration
├── package.json              # Root level scripts
├── README.md                 # Project documentation
└── docs
    ├── Infrastructure_description.md
    ├── Pipeline_description.md
    └── Application_dependencies.md
```

## Infrastructure

The infrastructure includes:

- **Frontend Hosting**: AWS S3 with static website hosting enabled.
- **Backend Hosting**: AWS Elastic Beanstalk with Node.js.
- **Database**: AWS RDS PostgreSQL instance.

## Architecture Diagram (Text Representation)

```
User --> [S3 Frontend Hosting]
           |
           v
      [Elastic Beanstalk API]
           |
           v
        [RDS Postgres DB]
```

## Pipeline Overview

CircleCI is used for the CI/CD pipeline with the following steps:

- Install frontend and backend dependencies.
- Run lint checks.
- Build frontend and backend apps.
- Hold job for manual approval.
- Deploy backend to Elastic Beanstalk.
- Deploy frontend to S3.

## Important Links

- **Frontend App**: http://myawsbucket-01155187731.s3-website-us-east-1.amazonaws.com
- **Elastic Beanstalk Backend Endpoint**: http://udagram-api-dev.us-east-1.elasticbeanstalk.com/
- **CircleCI Pipeline**: https://app.circleci.com/pipelines/github/ayaaboud/nd0067-c4-deployment-process-project-starter-master

## How to Use

1. Clone the repo.
2. Configure environment variables and `.env` files.
3. Run the project locally using `npm run frontend:start` and `npm run api:start`.
4. Ensure the backend is correctly connected to your RDS instance.
5. Commit your code and let CircleCI handle the deployment.

## Notes

- All required files such as .elasticbeanstalk, .npmrc, and package.json are present as per project requirements.

- Angular and TypeScript dependency conflicts have been resolved to match compatibility requirements.

## Author

Udacity Student - Cloud DevOps Engineer Nanodegree
