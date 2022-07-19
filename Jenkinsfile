pipeline{
    agent any
    tools {nodejs "node"}

    stages {
        stage('Build') {
            agent {
                docker {
                    image 'acavalletto/pokedex-app:3000'
                    reuseNode true
                }
            }
            steps {
                sh 'acavalletto/pokedex-app --version'
            }
        }
        // stage('Test'){
        //     steps {
        //         sh 'npm test'
        //     }
        // }
    }
}