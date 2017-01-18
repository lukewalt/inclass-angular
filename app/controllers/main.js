// -------------------- MAIN --------------------------

app.controller('MainCrtl', function($scope, varFactory){
    $scope.myVaribable = "main ctrl varibale"

    $scope.functionThing = function(arg){
        console.log(arg);
        $scope.print = arg
    }

    $scope.messageFromFactory = varFactory.getThatVar();

    $scope.setter = (newVal) => {
        varFactory.setThatVar(newVal)
        console.log("NEW VAL", newVal);
    }
})
