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
