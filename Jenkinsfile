pipeline {
    agent any
    stages {
        stage('Checkout') {
            steps {
                checkout scm
            }
        }
        stage('Build Docker Image') {
            steps {
                script {
                    docker.build("scrape-master:latest")
                }
            }
        }
        stage('Push to DockerHub') {
            steps {
                script {
                    withCredentials([usernamePassword(credentialsId: 'dockerhub', usernameVariable: 'DOCKERHUB_USERNAME', passwordVariable: 'DOCKERHUB_PASSWORD')]) {
                        withEnv(["DOCKERHUB_USERNAME=${DOCKERHUB_USERNAME}"]) {
                            // For Windows use "start" instead of "nohup"
                            bat 'echo %DOCKERHUB_PASSWORD% | docker login -u %DOCKERHUB_USERNAME% --password-stdin'
                            docker.image("scrape-master:latest").push()
                        }
                    }
                }
            }
        }
    }
}
