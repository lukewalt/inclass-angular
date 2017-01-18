// -------------------- MAIN --------------------------

app.controller('MainCrtl', function($scope){
    $scope.myVaribable = "main ctrl varibale"
    $scope.functionThing = function(arg){
        console.log(arg);
        $scope.print = arg
    }

})
