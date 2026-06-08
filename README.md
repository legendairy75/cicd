# CI/CD Demo

This prject demonstrates a complete CI/CD pipeline,
using Github Actions, Docker, Github Container Registry (GHCR), and AWS EC2.

## Overview

When code is pushed to the repository or there is a pr,
GitHub Actions automatically:

1. Installs project dependencies
2. Runs unit tests with Vitest
3. Builds a Docker image
4. Pushes the image to GitHub Container Registry (GHCR)
5. Connects to an AWS EC2 instance over SSH
6. Pulls the latest image from GHCR
7. replaces the running container with a new version

This process allows code changes to be automatically tested, packaged,
and deployed without manual intervention.

## Technologies Used

- Nuxt 4
- Vitest
- Docker
- Github Actions
- Github Container Registry (GHCR)
- AWS EC2 (Amazon Linux)

## Architecture

Developer Push
↓
GitHub Actions
↓
Run Test
↓
Build Docker Image
↓
Push to GHCR
↓
SSH to EC2
↓
Pull latest Image
↓
Restart Container

While building this project I learned:

- How to create multi-stage GitHub Actions workflows
- How to build and publish Docker images
- How GitHub Container Registry permissions work
- How to deploy containers to AWS EC2 through SSH
