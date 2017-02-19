var app = angular.module("app", ['ngMaterial'])

app.config(function($interpolateProvider, $mdThemingProvider) {
    $interpolateProvider.startSymbol('{[{');
    $interpolateProvider.endSymbol('}]}');
    $mdThemingProvider.theme('default')
        .primaryPalette('green')
        .accentPalette('orange')
        .dark();
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
