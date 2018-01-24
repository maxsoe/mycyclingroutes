var app = angular.module('CycleRoutes', ['ngMaterial', 'ui.router']);

app.controller('mainCtrl', function(allRoutesSvc, testPosts) {
  var vm = this;

  allRoutesSvc.getPosts().then(response => {
    this.routes = response.data;
  });

  testPosts.getPosts('https://jsonplaceholder.typicode.com/posts').then(response => {
    this.posts = response.data;
  });
});

app.service('allRoutesSvc', function($http) {
  this.getPosts = function() {
    return $http.get('https://www.strava.com/api/v3/athletes/9149200/routes?access_token=b77ac5a33776a5ca8e16005ec66c3a962aeb66a0');
  }
});

app.service('testPosts', function($http) {
  this.getPosts = function(url) {
    return $http.get(url);
  }
});
