pipeline {
    agent {
        docker { 
            image 'acavalletto/pokedex-app'
            args '-p 3000:3000'
        }
    }
    stages {
        stage('Build'){
            steps {
                sh 'npm install'
            }
        }
    }
}