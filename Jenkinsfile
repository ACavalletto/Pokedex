pipeline {
    agent any
    stages {
        stage('Build'){
            agent 
            { 
                docker {
                    image 'acavalletto/pokedex-app'
                    reuseNode true
                }
            }
            steps {
                sh 'npm install'
            }
        }
    }
}
