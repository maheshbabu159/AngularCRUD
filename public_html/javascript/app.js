/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
var htiPortal = angular.module('htiPortal', []);
htiPortal.controller('UsersController', function ($scope, $http) {
    
    $scope.items = {};
    $http({
        
        method: 'POST',
        url: 'http://api.parse.com/1/functions/function',
        headers: {'X-Parse-Application-Id': 'I8pLOBgiTj7RgNDAKjBtPEFK7tkPVUyTUHX81ynL', 'X-Parse-REST-API-Key': 'puje6S1ykPiQZoZ1aSB53wrL4zMUK0uDjwlOTf4z', 'Content-Type': 'application/json' },
        data: {"method":"loginCheck","username":"samba","password":"samba"}
    }).success(function (data, status, headers, config) {
        $scope.items=data;

    }).error(function (data, status) {
        alert(status);
    });

});
