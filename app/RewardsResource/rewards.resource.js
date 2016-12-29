(function (angular) {
    
    
    function factoryFunction($resource) {
        return $resource('http://localhost:18080/crowdSourcing-web/rest/reward/:id', {
            "id": "@id"
        }, {
            update: {
                method: "PUT"
            }
        });
    }
    
    
    
    factoryFunction.$inject = ['$resource'];
    
    angular.module('RewardsResource').factory('RewardsResource', factoryFunction);
})(angular);