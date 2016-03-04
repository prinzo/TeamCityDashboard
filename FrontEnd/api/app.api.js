(function () {
    "use strict";

    angular
        .module("teamCityDashboard.api", ["ngResource"])
        .constant("appSettings", {
            serverPath: "pathToApi"
        });

}());