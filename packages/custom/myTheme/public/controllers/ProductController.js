(function () {
    'use strict';

    /* jshint -W098 */

    function ProductController($scope, Global, $stateParams, $location, productStorage) {

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
        //$scope.products = [{name: 'Nokia', price: '2016'}];
        $scope.makeProd = function () {
            productStorage.insertProducts();
            console.log("finish");
        }

        $scope.makeProd();

        console.log("!!!!!!!!!!!!!!!!!!TEST!!!!!!!!!!!!!!!!!!!!!")
        productStorage.get().then(function (productArray) {
            $scope.products = productArray;
        });

        if ($location.path() === '') {
            $location.path('/');
        }


        $scope.toggleCheck = function (prod) {
            if ($scope.checkedProducts.indexOf(prod) === -1) {
                $scope.checkedProducts.push(prod);
                $scope.checkedProductsID.push(prod._id);
                $scope.totalPrice += prod.price;
            } else {
                $scope.checkedProducts.splice($scope.checkedProducts.indexOf(prod), 1);
                $scope.checkedProductsID.splice($scope.checkedProductsID.indexOf(prod._id), 1);
                $scope.totalPrice -= prod.price;
            }
        };

        $scope.totalSum = function () {
            console.log($scope.resProducts);
        };


        $scope.addOrder = function () {
            $scope.addr.price = $scope.totalPrice;
            $scope.allOrder.id_products = $scope.checkedProductsID;
            $scope.allOrder.address = $scope.addr;

            productStorage.create($scope.allOrder);
            $location.path('/about')
        };
    }

    angular
        .module('mean.myTheme')
        .controller('ProductController', ProductController);

    ProductController.$inject = ['$scope', 'Global', '$stateParams', '$location', 'productStorage'];

})();


//
//angular.module('ProductController', []).controller('ProductController', function ($scope, $location) {
//    $scope.totalPrice = 0;
//    $scope.resProducts = "";
//    $scope.addr = [];
//    $scope.checkedProducts = [];
//    $scope.checkedProductsID = [];
//    $scope.allOrder = [];
//
//    $scope.products = [{name: 'Nokia', price: '2016'}];
//
//    //productStorage.get().then(function (productArray) {
//    //    $scope.products = productArray;
//    //});
//    //
//    //if ($location.path() === '') {
//    //    $location.path('/');
//    //}
//    //
//    //
//    //$scope.toggleCheck = function (prod) {
//    //    if ($scope.checkedProducts.indexOf(prod) === -1) {
//    //        $scope.checkedProducts.push(prod);
//    //        $scope.checkedProductsID.push(prod._id);
//    //        $scope.totalPrice += prod.price;
//    //    } else {
//    //        $scope.checkedProducts.splice($scope.checkedProducts.indexOf(prod), 1);
//    //        $scope.checkedProductsID.splice($scope.checkedProductsID.indexOf(prod._id), 1);
//    //        $scope.totalPrice -= prod.price;
//    //    }
//    //};
//    //
//    //$scope.totalSum = function () {
//    //    console.log($scope.resProducts);
//    //};
//    //
//    //
//    //$scope.addOrder = function () {
//    //    $scope.addr.price = $scope.totalPrice;
//    //    $scope.allOrder.id_products = $scope.checkedProductsID;
//    //    $scope.allOrder.address = $scope.addr;
//    //
//    //    productStorage.create($scope.allOrder);
//    //    $location.path('/about')
//    //};
//
//});
