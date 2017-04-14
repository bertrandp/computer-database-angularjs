(function () {
    'use strict';

    angular.module('app.dashboard')
        .component('cdbAddComputer', {
            templateUrl: 'src/app/dashboard/add-computer/addComputer.html',
            controller: AddComputerController
        });

    /* @ngInject */
    function AddComputerController($log, $location, computerService, companyService, Computer) {
        // jshint validthis: true
        const vm = this;

        vm.addComputer = computer => {
            computerService.addComputer(new Computer(computer).toDTO()).then(
                response => {
                    $log.info(response);
                    //vm.pager = payload;
                    $location.path('/dashboard')
                },
                errorResponse => {
                    $log.error('failure fetching computer list', errorResponse);
                });
        }

        this.$onInit = () => {
            companyService.getCompanies().then(
                response => {
                    $log.info(response.data);
                    vm.companies = response.data;
                },
                errorResponse => {
                    $log.error('failure fetching company list', errorResponse);
                });
        };

    }

})();