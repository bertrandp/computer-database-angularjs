(function() {
    'use strict';
    angular
        .module('app.dashboard')
        .config(routesConfig);


    /* @ngInject */
    function routesConfig($stateProvider) {
        $stateProvider
            .state('dashboard', {
                url: '/dashboard',
                component: 'cdbDashboard'
            })
            .state('/', {
                url: '/',
                component: 'cdbDashboard'
            })
            .state('add-computer', {
                url: '/add-computer',
                component: 'cdbAddComputer'
            })
            .state('edit-computer', {
            url: '/edit-computer/:id',
            component: 'cdbEditComputer'
        });
    }
})();
