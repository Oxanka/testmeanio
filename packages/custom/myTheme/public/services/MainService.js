(function() {
    'use strict';

    function MainService($http, $q) {
        var STORAGE_ID = 'products-angularjs';

        return {

            //create_product: function () {
            //    var result;
            //    result = $http.post('/api/insertproduct/')
            //        .then(function (ll) {
            //            return ll;
            //        })
            //        .catch(function (err) {
            //            console.log(err)
            //        });
            //    return result;
            //}

            insertProducts: function () {
                return $http.post('/api/insertproduct/', {})
                    .then(function (status) {
                        return status;
                    })
                    .catch(function (err) {
                        console.log(err)
                    });

            }

        //    getOrders: function() {
        //        var result;
        //        result = $http.get('/api/getorders/')
        //            .then(function (rez) {
        //                console.log(rez);
        //                return rez.data;
        //
        //            })
        //            .catch(function (err) {
        //                console.log(err)
        //            });
        //        return result;
        //    }
        };

    }

    angular
        .module('mean.myTheme')
        .factory('mStorage', MainService);

    // MyTheme.$inject = ['$http', '$q'];

})();
