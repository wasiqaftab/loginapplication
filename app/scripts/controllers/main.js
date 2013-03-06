'use strict';

angular.module('loginapplicationApp')
  .controller('MainCtrl', function ($scope,$resource,$http,$templateCache,myService) {
    $scope.service=myService.query();




     $scope.loginClick = function () {


		 $http({method: "JSONP", url: 'http://10.44.11.55:8000/api/v1/auth/login/?username='+$scope.username+'&password='+$scope.password+'&callback=JSON_CALLBACK&format=JSON', cache: $templateCache}).
				success(function(data, status) {
				$scope.status = status;
				$scope.data = data.api_key;
				
				}).
				error(function(data, status) {
				$scope.data = data || "Request failed";
				$scope.status = status;
		});



     	//debugger;
		/*	$http.get('http://10.44.11.55\\:8000/api/v1/auth/login/?username=admin&password=mindsmeet?callback=JSON_CALLBACK&format=JSON').
			success(function(data) {
			//$scope.form = data.post;
			alert( data + "test");
			}).
error(function(data, status, headers, config) {
// called asynchronously if an error occurs
// or server returns response with an error status.
alert(status + "testwww");
});*/
     }
     $scope.JSON_CALLBACK= function(data)
     {
     	// alert(data.api_key);
     }

  });


