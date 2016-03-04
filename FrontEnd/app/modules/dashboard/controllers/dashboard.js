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