(function() {
    'use strict';
    angular
        .module('app.hello')
        .config(routesConfig);

    routesConfig.$inject = ['$stateProvider'];

    function routesConfig($stateProvider) {
        $stateProvider
            .state('hello', {
                url: '/hello',
                component: 'cdbHello'
            });
    }
})();
