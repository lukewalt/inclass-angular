
// -------------------- LIST --------------------------
app.controller('ListCtrl', function($scope, $http, varFactory){
    console.log("here is the list controller");
    $scope.factoryThing = varFactory.getThatVar()

    $http.get(`list.json`)
    .then(function(val) {
        console.log(val.data.list);
        $scope.list = val.data.list
    })
})
