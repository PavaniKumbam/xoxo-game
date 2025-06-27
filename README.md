# xoxo-game

# 🧩 Gridlock Web App with CI/CD (Jenkins, Docker & Kubernetes)

This project showcases a complete CI/CD pipeline setup for deploying a simple Tic-Tac-Toe web application using **Jenkins**, **Docker**, and **Kubernetes**.

---

## 📌 Project Objective

To understand and implement an automated DevOps workflow — from code commit to containerized deployment on a Kubernetes cluster — using industry-standard tools.

---

## 🛠️ Tech Stack

- **Version Control**: Git, GitHub  
- **CI/CD Automation**: Jenkins  
- **Containerization**: Docker  
- **Container Orchestration**: Kubernetes  
- **Web Stack**: HTML, CSS, JavaScript (Frontend Only)

---

## 🚀 Project Workflow

### ✅ Step 1: Web App Development

- Built a simple Tic-Tac-Toe game using HTML, CSS, and JavaScript.
- Tested the UI in browser to ensure proper game functionality.

### ✅ Step 2: Dockerization

- Created a `Dockerfile` to containerize the app using an Nginx base image.
- Built the Docker image and verified it by running it locally.
- Exposed the app on port 8080 for browser access.

### ✅ Step 3: CI/CD with Jenkins

- Configured a Jenkins pipeline using a `Jenkinsfile`.
- On code push to GitHub:
  - Jenkins pulled the latest code
  - Built the Docker image
  - Pushed the image to Docker Hub
  - Deployed it to Kubernetes cluster via `kubectl`

### ✅ Step 4: Kubernetes Deployment

- Created a `deployment.yml` and `service.yml` file to manage the app in K8s.
- Kubernetes:
  - Ensured high availability using multiple pods
  - Exposed the app using a LoadBalancer

