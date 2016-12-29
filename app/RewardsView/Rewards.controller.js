(function (angular) {
    'use strict';

    function controllerFn($scope, RewardsResource,$state) {
        RewardsResource.query(function (data) {
            $scope.data = data;
        });
        $state.go('rewards');
    }
    controllerFn.$inject = ['$scope', 'RewardsResource','$state'];
    angular.module('RewardsView').controller('RewardsController', controllerFn);
})(angular);