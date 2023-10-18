pipeline {
    agent any
    stages {
        stage('Checkout') {
            steps {
                // Récupérer le code source depuis GitHub
                checkout scm
            }
        }
        stage('Build Docker Image') {
            steps {
                // Construire l'image Docker
                script {
                    docker.build("scrape-master:latest")
                }
            }
        }
        stage('Push to DockerHub') {
            steps {
                // Poussez l'image Docker vers DockerHub
                script {
                    docker.withRegistry('','dockerhub') {
                    docker_image.push("scrape-master")
                    docker_image.push("latest")
                    }
                }
            }
        }
    }
}
