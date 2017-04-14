(function () {
    'use strict';

    angular.module('app.dashboard')
        .component('cdbPagination', {
            templateUrl: 'src/app/dashboard/pagination/pagination.html',
            controller: PaginationController,
            bindings: {
                pager: '<',
                onUpdate: '&'
            }
        });

    /* @ngInject */
    function PaginationController($log) {
        // jshint validthis: true
        const vm = this;


        vm.setLimit = limit => {
            vm.pager.limit = limit;
            vm.pager.page = 1;
            vm.onUpdate({pager: vm.pager});
        };

        vm.nextPage = () => {
            vm.pager.page ++;
            vm.onUpdate({pager: vm.pager});
        };

        vm.previousPage = () => {
            vm.pager.page --;
            vm.onUpdate({pager: vm.pager});
        };

        vm.setPage = page => {
            vm.pager.page = page;
            vm.onUpdate({pager: vm.pager});
        };


        vm.$onChanges = () => {
            vm.pager.lastPage = parseInt(vm.pager.count / vm.pager.limit) + 1;

            let start;
            let end;

            if(vm.pager.lastPage <=10) {
                start = 1;
                end = vm.pager.lastPage;
            } else if (vm.pager.page <= 5) {
                start = 1;
                end = 10;
            } else if (vm.pager.page >= vm.pager.lastPage - 5) {
                start = vm.pager.lastPage - 10;
                end = vm.pager.lastPage;
            } else {
                start = vm.pager.page - 5;
                end = vm.pager.page + 5;
            }
            vm.pager.pageNumbers = [0];
            let j = 0;
            for (let i=start; i<=end ; i++) {
                vm.pager.pageNumbers[j] = i;
                j++;
            }

        };

    }

})();
