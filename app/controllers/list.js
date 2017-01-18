
// -------------------- LIST --------------------------
app.controller('ListCtrl', function($scope, $http){
    console.log("here is the list controller");

    $http.get(`list.json`)
    .then(function(val) {
        console.log(val.data.list);
        $scope.list = val.data.list
    })
})
