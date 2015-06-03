//var myApp = angular.module('myApp',[]);
//
//myApp.controller('AppCtrl', ['$scope', function($scope) {
//    console.log("Yup!");
//}]);

console.log("Yes");

myApp.controller('HomeController',['$scope','$http', function($scope, $http){
    console.log("Home controller loaded");
}]);