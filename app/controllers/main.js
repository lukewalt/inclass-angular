// -------------------- MAIN --------------------------

app.controller('MainCrtl', function($scope, varFactory){
    $scope.myVaribable = "main ctrl varibale"
    $scope.functionThing = function(arg){
        console.log(arg);
        $scope.print = arg
    }
    $scope.messageFromFactory = varFactory.getThatVar();

})
