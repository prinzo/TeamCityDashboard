(function () {
    'use strict';

    angular.module('teamCityDashboard')
        .config(function ($stateProvider) {

            $stateProvider
                .state('dashboard', {
                    url: '/dashboard',
                    templateUrl: 'app/modules/dashboard/views/dashboard.html'
                });
        });
})();