
(function() {
    let app = angular.module('githubViewer', []);

    let MainCtrl = function($scope, $http) {

        $http.get('https://api.github.com/users/uchesylvester')
        	 .then(function(response) {
        	 	console.log(response.data);
        	 	$scope.user = response.data;
        	 	// $scope.project = response.data['repos_url']
        	 	// console.log(response.data.repos_url)
        	 })
        	 .catch(function(error) {
        	 	console.log(error)
        	 	$scope.error = `Couldn't load the page`
        	 });


        $scope.message = 'Hello There, welcome to AngularJS';

    }
    app.controller('MainCtrl', MainCtrl);
}())
