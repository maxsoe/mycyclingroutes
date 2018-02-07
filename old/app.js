var app = angular.module('CycleRoutes', ['ngMaterial', 'ui.router']);

app.controller('mainCtrl', function(allRoutesSvc, specificRoute) {
  var vm = this;

  allRoutesSvc.getPosts().then(response => {
    this.routes = response.data;

    console.log("number of routes: " + this.routes.length);

    // for (var i = 0; i < this.routes.length; i++) {
    //   var routeID = this.routes[i].id;
    //   console.log(routeID);
    //   var routeUrl = 'https://www.strava.com/api/v3/routes/'.concat(routeID, '?access_token=b77ac5a33776a5ca8e16005ec66c3a962aeb66a0');
    //   specificRoute.getPosts(routeUrl).then(response => {
    //     this.posts = response.data;
    //   });
    // };
  });

  // specificRoute.getPosts(routeUrl).then(response => {
  //   this.individualRoute = response.data;
  // });
});

app.service('specificRoute', function($http) {
  this.getPosts = function(url) {
    var url = 'https://www.strava.com/api/v3/routes/'.concat(url, '?access_token=b77ac5a33776a5ca8e16005ec66c3a962aeb66a0');
    return $http.get(url);
  }
});
