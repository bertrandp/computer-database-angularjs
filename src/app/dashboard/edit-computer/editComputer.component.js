(function () {
    'use strict';

    angular.module('app.dashboard')
        .component('cdbEditComputer', {
            templateUrl: 'src/app/dashboard/edit-computer/editComputer.html',
            controller: EditComputerController
        });

    /* @ngInject */
    function EditComputerController($log, $location, $stateParams, computerService, companyService, Computer) {
        // jshint validthis: true
        const vm = this;

        vm.editComputer = computer => {
            computerService.editComputer(computer.id, computer.toDTO()).then(
                response => {
                    $log.info(response);
                    //vm.pager = payload;
                    $location.path('/dashboard')
                },
                errorResponse => {
                    $log.error('failure fetching computer list', errorResponse);
                });
        };

        this.$onInit = () => {

            //vm.computer = new Computer;
            //vm.computer.id = $stateParams.id;

            computerService.getComputer($stateParams.id).then(
                response => {
                    $log.info(response);
                    //vm.pager = payload;
                    vm.computer = response;
                },
                errorResponse => {
                    $log.error('failure fetching computer list', errorResponse);
                });

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