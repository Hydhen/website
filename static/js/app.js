var app = angular.module("app", ['ngMaterial'])

app.config(function($interpolateProvider) {
    $interpolateProvider.startSymbol('{[{');
    $interpolateProvider.endSymbol('}]}');
});

app.controller('indexCtrl', function ($scope, $timeout, $mdSidenav) {
    $scope.toggleLeft =  function() {
        $mdSidenav('left').toggle();
    };
});

// Click on sideNav button after loading
setTimeout(function() {
    document.getElementById('menuLeftBtn').click()
 }, 0);
