## Installation Guide

This guide will walk you through the steps to set up and run the project using Minikube.

### Prerequisites
Before you begin, make sure you have the following installed on your machine:
- Minikube: [Installation Guide](https://minikube.sigs.k8s.io/docs/start/)
- kubectl: [Installation Guide](https://kubernetes.io/docs/tasks/tools/install-kubectl/)

### Steps
1. Clone the repository:
    ```
    git clone https://github.com/<your-username>/your-project.git
    ```

2. Change into the project directory:
    ```
    cd your-project
    ```

3. Start Minikube:
    ```
    minikube start
    ```

4. Set the Docker environment variables to use the Minikube Docker daemon:
    ```
    eval $(minikube docker-env)
    ```

6. Deploy the application to Minikube:
    ```
    kubectl apply -f k8s/
    ```

7. Get the URL to access the application:
    ```
    minikube service your-deployment-name --url
    ```

9. Open the URL in your browser and you should see the application running and access page using: 

   ```
   login.example.com:<port from minikube service>/login
   ```

   ```
   signup.example.com:<port from minikube service>/signup
   ```

### Cleanup
To clean up the resources created by Minikube, run the following command:
```
minikube delete
```
