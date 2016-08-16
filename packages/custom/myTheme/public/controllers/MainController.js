(function () {
    'use strict';

    /* jshint -W098 */

    function MainController($scope, Global, $stateParams, $location, mStorage) {

        $scope.global = Global;
        $scope.package = {
            name: 'myTheme'
        };
        //$scope.products = [{name: 'Nokia', price: '2016'}];
        console.log("!!!!!!!!!!!!!!!!!!TEST!!!!!!!!!!!!!!!!!!!!!");

       $scope.makeProd = function () {
            mStorage.insertProducts();
            console.log("finish");
        }

        $scope.makeProd();


        //if ($location.path() === '') {
        //    $location.path('/');
        //}
        //$scope.makeProd = function () {
        //    mainStorage.create_product();
        //}
        //
        //$scope.makeProd();
    }

    angular
        .module('mean.myTheme')
        .controller('MainController', MainController);

    MainController.$inject = ['$scope', 'Global','$stateParams', '$location', 'mStorage'];

})();
