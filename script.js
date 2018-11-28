
(function() {
    let app = angular.module('githubViewer', []);

    let MainCtrl = function($scope, $http) {
      
      let onComplete = function(response) {
        // console.log(response.data);
        $scope.user = response.data;
        $http.get($scope.user.repos_url)
             .then(onRepos, onError);
      };
      
      let onRepos = function(response) {
        
        console.log(response.data);
        $scope.repos = response.data;
        
      }
      
      let onError = function(err) {
        console.log(err);
        $scope.error = `Couldn't find User`;
      };
      
      $scope.search = function(username) {
        $http.get('https://api.github.com/users/' + username)
               .then(onComplete, onError); 
      };

      
      $scope.username = 'angular';
    
      $scope.message = 'GITHUB VIEWER';

      $scope.sortOrder = '-stargazers_count'

    };
    
    app.controller('MainCtrl', MainCtrl);
}())
