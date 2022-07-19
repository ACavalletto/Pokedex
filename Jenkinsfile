pipeline {
    agent any
    stages {
        stage('Build'){
            agent 
            { 
                docker {
                    image 'acavalletto/pokedex-app'
                }
            }
            steps {
                sh 'npm install'
            }
        }
    }
}