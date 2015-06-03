//var myApp = angular.module("myApp", []);
//
//myApp.controller('HeadBarTwoController', ['$scope', '$http', function($scope, $http){
//
//    return $http.get('/users').then(function(response){
//       $scope.users = response.data;
//
//    });
//}]);


myApp.controller('HeadBarTwoController',['$scope','$http', function($scope, $http){
    console.log("Controller iz loaded");



    $scope.getData = function() {
        console.log("I ran)")
        return $http.get('/users').then(function (response) {
            console.log("I responded: ", response.data[0].title);
            $scope.users = response.data;
            console.log("HERE: ", $scope.users[0].title);
        });
    }

    $scope.getData();
}]);