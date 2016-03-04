(function () {
    'use strict';

    angular.module('teamCityDashboard')
        .config(function ($stateProvider) {

            $stateProvider
                .state('login', {
                    url: '/login',
                    templateUrl: 'app/modules/login/views/login.html'
                });
        });
})();