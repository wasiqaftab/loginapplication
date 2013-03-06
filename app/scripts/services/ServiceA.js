'use strict';

angular.module('loginapplicationApp')
  .factory('ServiceA', function ($http,$templateCache) {
    // Service logic
    // ...

var myService = {
    LoginCall: function() {
      // $http returns a promise, which has a then function, which also returns a promise
      var promise = $http.get('http://10.44.11.55:8000/api/v1/auth/login/?username=admin&password=mindsmeet&callback=JSON_CALLBACK&format=JSONP').then(function (response) {
        // The then function here is an opportunity to modify the response
        console.log(response);
        // The return value gets picked up by the then in the controller.
        return response.data;
      });
      // Return the promise to the controller
      return promise;
    }
  };

return myService;
    // Public API here
  /*  return {
      LoginCall: function (username,password) {
        //alert(scope.username);
       // http://10.44.11.55:8000/api/v1/auth/login/?username=admin&password=mindsmeet&callback=JSON_CALLBACK&format=JSON
        $http({method: "JSONP", url: 'http://10.44.11.55:8000/api/v1/auth/login/?username=admin&password=mindsmeet&callback=JSON_CALLBACK&format=JSON', cache: $templateCache}).
        success(function(data, status) {
        //$scope.status = status;
       // $scope.data = data.api_key;
      // alert(data.api_key);
        return data.api_key;
        
        }).
        error(function(data, status) {
        //$scope.data = data || "Request failed";
        //$scope.status = status;
    });
      }
    };
    */
  });
