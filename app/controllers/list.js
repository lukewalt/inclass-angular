
// -------------------- LIST --------------------------
app.controller('ListCtrl', function($scope, $http, varFactory, dataOneFactory){
    console.log("here is the list controller");
    $scope.factoryThing = varFactory.getThatVar()


    dataOneFactory.getList().then((val) => {
        console.log(val);
        $scope.list = val.list
    })

})
