// Register `miniMap` component, along with its associated controller and template
angular
  .module('miniMap', [])
  .component('miniMap', {
    templateUrl: 'all-routes/mini-map/mini-map.template.html',
    css: 'all-routes/mini-map/mini-map.css',
    controller: miniMapController,
    controllerAs: 'miniMapCtrl'
  });

function miniMapController() {
};
