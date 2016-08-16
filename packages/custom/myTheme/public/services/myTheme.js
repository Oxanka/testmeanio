(function() {
    'use strict';

    function MyTheme($http, $q) {
        return {

            create_product: function () {

                return $http.post('/api/insertproduct/', {
                })
                    .then(function (ll) {
                        return ll;
                    })
                    .catch(function (err) {
                        console.log(err)
                    });
            }
            //name: 'myTheme',
            //checkCircle: function(circle) {
            //    var deferred = $q.defer();
            //
            //    $http.get('/api/myTheme/example/' + circle).success(function(response) {
            //        deferred.resolve(response);
            //    }).error(function(response) {
            //        deferred.reject(response);
            //    });
            //    return deferred.promise;
            //
            //}
        };
    }

    angular
        .module('mean.myTheme')
        .factory('mainStorage', MyTheme);

    MyTheme.$inject = ['$http', '$q'];

})();
