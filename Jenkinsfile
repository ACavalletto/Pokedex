// pipeline {
//     agent any
//     stages {
//         stage('Build'){
//             agent 
//             { 
//                 docker {
//                     image 'acavalletto/pokedex-app'
//                     reuseNode true
//                 }
//             }
//             steps {
//                 sh 'npm install'
//             }
//         }
//     }
// }


pipeline {
  agent any
    
  tools {nodejs "node"}
    
  stages {
        
    stage('Git') {
      steps {
        git 'https://github.com/ACavalletto/Pokedex'
      }
    }
     
    stage('Build') {
      steps {
        sh 'npm install'
      }
    }  
    
            
    stage('Test') {
      steps {
        sh 'npm test'
      }
    }
  }
}