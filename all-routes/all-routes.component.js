// Register `allRoutes` component, along with its associated controller and template
angular
  .module('allRoutes', ['allRoutesSvc'])
  .component('allRoutes', {
    // template: 'test template'
    templateUrl: 'all-routes/all-routes.template.html',
    controller: AllRoutesController,
    controllerAs: 'allRoutesCtrl'
  });

function AllRoutesController(allRoutesSvc) {
  allRoutesSvc.getPosts().then(response => {
    this.routes = response.data;
  });
};
