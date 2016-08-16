(function () {
    'use strict';

    /* jshint -W098 */

    function AboutController($scope, Global, $stateParams, $location, orderStorage) {

        $scope.totalPrice = 0;
        $scope.resProducts = "";
        $scope.addr = [];
        $scope.checkedProducts = [];
        $scope.checkedProductsID = [];
        $scope.allOrder = [];

        $scope.global = Global;
        $scope.package = {
            name: 'myTheme'
        };

        $scope.order = [];

        if ($location.path() === '') {
            $location.path('/');
        }
        orderStorage.getOrders()
            .then(function (orderArray) {
                $scope.order = orderArray;
                console.log("$scope.order");
                console.log($scope.order);
            });
    }

    angular
        .module('mean.myTheme')
        .controller('AboutController', AboutController);

    AboutController.$inject = ['$scope', 'Global', '$stateParams', '$location', 'orderStorage'];

})();