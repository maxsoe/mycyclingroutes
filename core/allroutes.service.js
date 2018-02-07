// Get my routes from Strava
angular
  .module('allRoutesSvc', [])
  .service('allRoutesSvc', function($http) {
    this.getPosts = function() {
      // return $http.get('https://www.strava.com/api/v3/athletes/9149200/routes?access_token=b77ac5a33776a5ca8e16005ec66c3a962aeb66a0');
      return $http.get('core/localjson/local-copy.json');
    }
  });
