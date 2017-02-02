var app = angular.module('McweeSite', ['ngRoute']);

app.config(function($routeProvider){
  $routeProvider
    .when('/', {
      templateUrl: 'views/home.html',
      controller: 'MainController'
    })    
    .when('/work', {
      templateUrl: 'views/work.html',
      controller: 'MainController'
  	})	
    .when('/testimonials', {
      templateUrl: 'views/testimonial.html',
      controller: 'MainController'
  	})
    .when('/aboutme', {
      templateUrl: 'views/about.html',
      controller: 'MainController'
    })
    .when('/resume', {
      templateUrl: 'views/resume.html',
      controller: 'MainController'
    })
    .otherwise({
      redirectTo: '/'
    })
});

