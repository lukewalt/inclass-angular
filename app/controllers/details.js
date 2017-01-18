

// -------------------- DETAIL --------------------------

app.controller('DetailCtrl', function($scope, $routeParams, $http, varFactory){
    console.log("DetailCtrl");
    //saves variable in router to a scoped variable in the controller
    $scope.thatNumber = $routeParams.someVariable
    $scope.factoryThing = varFactory.getThatVar() + " GO TO FACTORY"

    $http.get(`list.json`)
    .then(function(val){
        let list = val.data.list
        console.log(list);
        $scope.selectedItem = list[$scope.thatNumber]
    })
})
