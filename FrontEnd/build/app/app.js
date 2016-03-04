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
(function () {
    'use strict';

    angular.module('teamCityDashboard.admin', []);

})();
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
(function () {
    'use strict';

    angular.module('teamCityDashboard.dashboard', []);

})();
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
(function () {
    'use strict';

    angular.module('teamCityDashboard.login', []);

})();
(function () {
    'use strict';

    angular
        .module('teamCityDashboard.dashboard')
        .controller('Dashboard', ['toaster', Dashboard]);

    function Dashboard(toaster) {
        var scope = this;
        scope.SignIn = SignIn;

        function SignIn() {
            if (scope.user.username === "test" && scope.user.password === "test") {
                toaster.pop('success', 'Login Success', 'Successfully logged in');
            }
            else {
                toaster.pop('error', 'Login Failed', 'Please verify your username and password');
            }
        }
    }
}());
(function () {
    'use strict';

    angular
        .module('teamCityDashboard.login')
        .controller('Login', ['toaster', '$state', Login]);

    function Login(toaster, $state) {
        var scope = this;
        scope.SignIn = SignIn;

        function SignIn() {
            if (scope.user.username === "test" && scope.user.password === "test") {
                toaster.pop('success', 'Login Success', 'Successfully logged in');
                $state.go('dashboard', {});
            }
            else {
                toaster.pop('error', 'Login Failed', 'Please verify your username and password');
            }
        }
    }
}());
(function () {
    "use strict";

    angular
        .module("teamCityDashboard.api", ["ngResource"])
        .constant("appSettings", {
            serverPath: "pathToApi"
        });

}());