/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

var mainApp = angular.module("mainApp", []);

//Configuring all the constants values of the application
mainApp.constant('constants', {
    appName: "Admin",
    appVerion: 1.0,
    serviceURL: 'https://api.parse.com/1/functions/function',
    requestMethodType: "Post",
    requestHeaders:
            {
                'X-Parse-Application-Id': 'I8pLOBgiTj7RgNDAKjBtPEFK7tkPVUyTUHX81ynL',
                'X-Parse-REST-API-Key': 'puje6S1ykPiQZoZ1aSB53wrL4zMUK0uDjwlOTf4z',
                'Content-Type': 'application/json'
            },
    methodNames: {
        getAllUsers: 'getAllUsers',
        loginCheck: 'loginCheck'
    }
});

/*var htiPortal = angular.module('htiPortal', []);
htiPortal.controller('UsersController', function ($scope, $http) {
  
    $scope.items = {};
    $http({
        
        method: 'POST',
        url: 'https://api.parse.com/1/functions/function',
        headers: {'X-Parse-Application-Id': 'I8pLOBgiTj7RgNDAKjBtPEFK7tkPVUyTUHX81ynL', 'X-Parse-REST-API-Key': 'puje6S1ykPiQZoZ1aSB53wrL4zMUK0uDjwlOTf4z', 'Content-Type': 'application/json' },
        data: {"method":"getAllUsers"}
    }).success(function (data, status, headers, config) {
        $scope.items=data;

    }).error(function (data, status) {
        alert(status);
    });

});*/
