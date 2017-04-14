(function () {
    'use strict';

    angular.module('app.dashboard')
        .service('companyService', CompanyService);

    /* @ngInject */
    function CompanyService($http) {

        function getCompanies() {
            return $http({
                method: 'GET',
                url: env.api.URL + '/companies'
            });
        }

        return {
            getCompanies: getCompanies
        };
    }
})();
