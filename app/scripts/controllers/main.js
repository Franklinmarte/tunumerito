require(['numeroApp'], function (numeroApp) {
    numeroApp.controller('homeController', function ($scope) {
        $scope.greet = function () {
            return 'Hello Docrca!'
        }
    });
    return numeroApp;
});