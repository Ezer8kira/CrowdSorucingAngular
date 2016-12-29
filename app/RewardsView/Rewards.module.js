(function (angular) {
    'use strict';

    function configFn($stateProvider) {
        $stateProvider.state('rewards', {
            url: '/rewards'
            , templateUrl: 'RewardsView/RewardsList.view.html'
        });
    }
    configFn.$inject = ['$stateProvider'];
    angular.module('RewardsView', ['RewardsResource', 'ui.router']).config(configFn);
})(angular);