angular
  .module('cycleRouteApp')
  .config(function($mdThemingProvider) {
    $mdThemingProvider.theme('default')
      .primaryPalette('indigo')
      .accentPalette('pink')
      .warnPalette('orange')
      .backgroundPalette('grey');
  })
  .config(function($stateProvider, $urlRouterProvider, $locationProvider) {
    $urlRouterProvider.otherwise('/');

    var homeState = {
      name: 'home',
      url: '/'
    };

    var allRoutesState = {
      name: 'routes',
      url: '/routes',
      template: '<all-routes></all-routes>'
    };

    var routeDetailState = {
      name: 'phoneDetail',
      url: '/routes/:routeId',
      template: '<route-detail></route-detail>'
    }

    $stateProvider
      .state(homeState)
      .state(allRoutesState)
      .state(routeDetailState);
  });
