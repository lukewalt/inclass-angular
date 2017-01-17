console.log("hey");


var app = angular.module("MonkeyButtApp", ['ngRoute'])

app.config(function($routeProvider) {
    $routeProvider
        .when('/', {
            controller: 'MainCrtl',
            templateUrl: 'partials/main.html'
        })
        .when('/list', {
            controller: 'ListCtrl',
            templateUrl: 'partials/list.html'
        })
        .when('/list/:listVar', {
            controller: "DetailCtrl",
            templateUrl: "partials/detail.html"
        })
        .otherwise ({
            redirectTo: '/'
        })
})


// -------------------- MAIN --------------------------

app.controller('MainCrtl', function($scope){
    $scope.potatoes = "baked";
    $scope.steak = "yum";
    $scope.number = 21;
    $scope.obj = {1: "hap"}
    $scope.functionThing = function(arg){
        console.log(arg);
        $scope.print = arg
    }

})

// -------------------- LIST --------------------------
app.controller('ListCtrl', function($scope, $http){
    console.log("here is the list controller");

    $http.get(`list.json`)
    .then(function(val) {
        console.log(val.data.list);
        $scope.list = val.data.list
    })
})



// -------------------- DETAIL --------------------------

app.controller('DetailCtrl', function($scope, $routeParams, $http){
    console.log("DetailCtrl");
    $scope.listVar = $routeParams.listVar


})
