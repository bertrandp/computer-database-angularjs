(function () {
    'use strict';

    angular.module('app.dashboard')
        .service('computerService', ComputerService);

    /* @ngInject */
    function ComputerService($log, $http, Page, Computer) {

        function getComputers(params) {
            return $http({
                method: 'GET',
                url: env.api.URL + '/computers',
                params: params
            }).then(response => {
                return new Page(response.data);
            });
        }

        function getComputer(id) {
            return $http({
                method: 'GET',
                url: env.api.URL + '/computers/' + id
            }).then(response => {
                return new Computer(response.data);
            });
        }

        function addComputer(computer) {
            return $http({
                method: 'POST',
                url: env.api.URL + '/computers',
                data: computer
            });
        }

        function editComputer(id, computer) {
            return $http({
                method: 'PUT',
                url: env.api.URL + '/computers/' + id,
                data: computer
            });
        }

        return {
            getComputers: getComputers,
            getComputer: getComputer,
            addComputer: addComputer,
            editComputer: editComputer
        };
    }
})();
