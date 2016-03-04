(function () {
    'use strict';

    angular.module('teamCityDashboard')
        .config(function ($stateProvider) {

            $stateProvider
                .state('admin', {
                    url: '/admin/home',
                    templateUrl: 'app/modules/admin/views/home.html'
                });
        });
})();