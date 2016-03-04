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