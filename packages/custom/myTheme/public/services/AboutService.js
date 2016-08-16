(function() {
    'use strict';

    function AboutService($http, $q) {
        var STORAGE_ID = 'products-angularjs';

        return {

            getOrders: function() {
                var result;
                result = $http.get('/api/getorders/')
                    .then(function (rez) {
                        console.log(rez);
                        return rez.data;

                    })
                    .catch(function (err) {
                        console.log(err)
                    });
                return result;
            }
        };

    }

    angular
        .module('mean.myTheme')
        .factory('orderStorage', AboutService);

    // MyTheme.$inject = ['$http', '$q'];

})();
