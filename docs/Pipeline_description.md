# Pipeline Description

This project uses CircleCI for Continuous Integration and Deployment. The pipeline is structured as follows:

1. **Install Dependencies**: Installs Node.js modules for frontend and backend.
2. **Linting**: Lints the frontend Angular code.
3. **Build**: Builds both frontend and backend projects.
4. **Deploy**:
   - The backend is zipped and deployed to AWS Elastic Beanstalk.
   - The frontend is copied to an S3 bucket configured for static web hosting.

Each successful push to the main branch triggers the pipeline.