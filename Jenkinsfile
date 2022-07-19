pipeline{
    agent {
        docker{
            image 'node:acavalletto-pokedex-app'
            args '-p 3000:3000'
        }
    }
    // tools {nodejs "node"}

    stages {
        stage('Build') {
            steps {
                sh 'npm install'
                echo 'Build Success'
            }
        }
        // stage('Test'){
        //     steps {

        //     }
        // }
    }
}