/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

mainApp.controller("userController",function ($scope, $http, constants) {
    
    //Controller variables
    $scope.response = {};
    
    //Method for getting all the users response
    $scope.getAllUsers = function () {
        
        $http({
            
            method: constants.requestMethodType,
            url: constants.serviceURL,
            headers: constants.requestHeaders,
            data: {"method": constants.methodNames.getAllUsers}
            
        }).success(function (data) {
            
            $scope.response = data;

        }).error(function (status) {
            
            alert(status);
        });
    };
    
    $scope.formLoginCheck = function () {

        $http({
            
            method: constants.requestMethodType,
            url: constants.serviceURL,
            headers: constants.requestHeaders,
            data: {"method": constants.methodNames.loginCheck,"username":$scope.username,"password":$scope.password}
            
        }).success(function (data) {

            window.location.href = 'home.html';

        }).error(function (status) {
            
            $scope.errorMsg = status;
        });
    };
});