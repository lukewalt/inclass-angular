
app.factory('dataOneFactory', function($http){
    return {
        getList: () => {
            return $http.get(`list.json`)
            .then(function(val){
                console.log("list.json", val.data);
                return val.data
            })
        }
    }

})
