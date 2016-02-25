'use strict';

//var TemplatePrefix = 'views/';
// ngRoute module to route between pages
// Then configure the $routeProvider by defining the routes.

angular.module('angularjsSimpleWebsiteApp', ['ngRoute'])
  .config(function ($routeProvider) {
    // register the routes and the templates
    for ( var path in Pages ) {  
      var template = Pages[path][0]; // this is the "Pages" in the index.html
      $routeProvider.when( path, {templateUrl: 'views/' + template}); // "when --- is clicked go to the -- page "
    }
    // the default route
    $routeProvider
      .otherwise({
        redirectTo: '/'
      });
  });

