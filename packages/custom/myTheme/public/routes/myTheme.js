(function () {
    'use strict';

    function MyTheme($viewPathProvider, $stateProvider) {
        $viewPathProvider.override('system/views/index.html', 'myTheme/views/index.html');
        $stateProvider
            .state('order', {
                url: '/order',
                templateUrl: 'myTheme/views/order.html',
                controller: 'ProductController'
            })

            .state('about', {
                url: '/about',
                templateUrl: 'myTheme/views/about.html',
                controller: 'AboutController'
            })
            //.state('index', {
            //    url: '/index',
            //    templateUrl: 'myTheme/views/home.html',
            //    controller: 'MainController'
            //})
    }

    angular
        .module('mean.myTheme')
        .config(MyTheme);

    MyTheme.$inject = ['$viewPathProvider', '$stateProvider'];


})();
