 (function() {
    'use strict';

    require.config({
        paths: {
            // General dependencies

            'homeController': 'scripts/controllers/main',
            'numerounoCtrl': 'scripts/controllers/numerounoCtrl',
            'numeroApp': 'scripts/app',
            'angular': 'bower_components/angular/angular.min',
            'angular-route': 'bower_components/angular-route/angular-route',
            'jquery': 'bower_components/jquery/dist/jquery.min',
            'jquery-ui': 'bower_components/jquery-ui/jquery-ui.min',
            'coreJquery': 'scripts/jquery-config'
            
            

            // Local dependencies
           
        },

        shim: {
            'angular': {
               'exports': 'angular'
            },
            "jquery.alpha": ['jquery'],

            'numeroApp': {
                deps: ['angular']
            }
        }
    });

   require(['angular','coreJquery'], function(angular) {
        require(['numeroApp'], function() {
            angular
                .element(document)
                .ready(function() {
                    angular.bootstrap(document, ['numeroApp']);
                });
        });
    });
})();
