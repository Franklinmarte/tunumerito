 (function() {
    'use strict';

    require.config({
        paths: {
            // General dependencies

            'homeController': 'scripts/controllers/main',
            'numeroApp': 'scripts/app',
            'angular': 'bower_components/angular/angular.min',
            'angular-route': 'bower_components/angular-route/angular-route'
            

            // Local dependencies
           
        },

        shim: {
            'angular': {
               'exports': 'angular'
            },

            'numeroApp': {
                deps: ['angular']
            }
        }
    });

   require(['angular','numeroApp','homeController'], function(angular) {
        require(['numeroApp'], function() {
            angular
                .element(document)
                .ready(function() {
                    angular.bootstrap(document, ['numeroApp']);
                });
        });
    });
})();
