console.log("hey");


var app = angular.module("nameOfApp", ['ngRoute'])

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
        .when('/list/:someVariable', {
            controller: "DetailCtrl",
            templateUrl: "partials/detail.html"
        })
        .otherwise ({
            redirectTo: '/'
        })
})


// -------------------- MAIN --------------------------

app.controller('MainCrtl', function($scope){
    $scope.myVaribable = "main ctrl varibale"
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
    //saves variable in router to a scoped variable in the controller
    $scope.thatNumber = $routeParams.someVariable

    $http.get(`list.json`)
    .then(function(val){
        let list = val.data.list
        console.log(list);
        $scope.selectedItem = list[$scope.thatNumber]
    })
})
