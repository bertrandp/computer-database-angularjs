(function () {
    'use strict';

    angular.module('app.dashboard')
        .component('cdbDashboard', {
            templateUrl: 'src/app/dashboard/dashboard.html',
            controller: DashboardController
        });

    /* @ngInject */
    function DashboardController($log,computerService) {
        // jshint validthis: true
        const vm = this;

        vm.fetchComputers = pager => {

            computerService.getComputers(pager ? createParams(pager) : null).then(
                response => {
                    $log.info(response);
                    vm.pager = response;
                },
                errorResponse => {
                    $log.error('failure fetching computer list', errorResponse);
                });
        };

        this.$onInit = () => {
            vm.fetchComputers();
        };

        vm.setSearch = search => {
            vm.pager.search = search;
            vm.pager.page = 1;
            vm.fetchComputers(vm.pager);
        };

        vm.setSort = (column,order) => {
            vm.pager.column = column;
            vm.pager.order = order;
            vm.fetchComputers(vm.pager);
        };

        function createParams(pager) {
            let params = {};
            params.page = pager.page;
            params.limit = pager.limit;
            params.order = pager.order;
            params.column = pager.column;
            params.search = pager.search;
            return params;
        }

    }

})();
