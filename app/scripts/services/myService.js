'use strict';

angular.module('loginapplicationApp')
  .factory('myService', function ($resource) {
    // Service logic
    // ...

    return $resource("http://10.44.11.55\\:8000/api/v1/auth/login/?username=admin&password=mindsmeet&callback=JSON_CALLBACK&format=JSON",{
        

    },{
      get: {
          method:"JSON",
          callback:"JSON_CALLBACK"
      },
      query: {
        method: "JSON",
        isArray: true
      },
      save:
      {
        method:"JSON"
      },

      
    });

    
    
  });
