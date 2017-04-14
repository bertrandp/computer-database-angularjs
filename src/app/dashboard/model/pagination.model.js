(function () {
    'use strict';

    angular.module('app.dashboard')
        .factory('Page', PageModel);

    /* @ngInject */
    function PageModel (Computer) {
        class Page {
            constructor(dto) {
                this.count = dto.count;
                this.limit = dto.limit;
                this.page = dto.page;
                this.column = dto.column;
                this.order = dto.order;
                this.search = dto.search;
                this.list = dto.list.map(computer => new Computer(computer))
            }
        }

        return Page;
    }


})();
