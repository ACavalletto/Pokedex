pipeline{
    agent docker {
        image 'acavalletto/pokedex-app'
        args '-p 3000:3000'
    }
    tools {nodejs "node"}

    stages {
        stage('Build') {
            steps {
                sh 'npm install'
            }
        }
        stage('Test'){
            steps {
                sh './test/test.js'
            }
        }
    }
}