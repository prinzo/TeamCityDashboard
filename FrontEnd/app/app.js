var app = angular.module('teamCityDashboard', ['teamCityDashboard.api',
    'teamCityDashboard.admin',
    'teamCityDashboard.login',
    'teamCityDashboard.dashboard',
    'ui.bootstrap',
    'ui.router',
    'ngCookies',
    'toaster',
    'angularSpinner',
    'ngAnimate'
]);

app.config(function ($stateProvider, $urlRouterProvider) {
    $urlRouterProvider.otherwise('/login');

});