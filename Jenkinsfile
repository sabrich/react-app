pipeline {
    agent any
    environment {
        registry = "gabtenisabri/test"
        img = "$registry"+":${env.BUILD_ID}"
    }

    stages {
        stage('Checkout') {
            steps {
               git 'https://github.com/sabrich/react-app.git'
                sh 'ls -la'
            }
        }
        
        stage('Build') {
            steps {
                echo 'Building our image'
                script {
                    dockerImg = docker.build("${img}")
                }
            }
        }
        
        stage('RUN') {
            steps {
                echo 'Run image'
                sh encoding: 'returnStdout', script: 'docker run -d --name ${JOB_NAME} -p 5000:5000 ${img}'
            }
        }
    }
}
