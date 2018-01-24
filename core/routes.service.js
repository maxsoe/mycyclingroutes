CycleRoutes.service('mainSvc', function($http) {
  this.getPosts = function() {
    return $http.get('https://jsonplaceholder.typicode.com/posts');
  }
});
