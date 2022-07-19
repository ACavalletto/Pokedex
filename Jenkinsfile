pipeline{
    agent any
    tools {nodejs "node"}

    stages {
        stage('Build') {
            agent {
                docker {
                    image 'node:acavalletto/pokedex-app'
                }
            }
            steps {
                sh 'npm install'
            }
        }
        stage('Test'){
            steps {
                sh 'node --version'
            }
        }
    }
}