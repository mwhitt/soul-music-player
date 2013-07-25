'use strict';

// Declare app level module which depends on filters, and services
angular.module('soulPlayer', ['soulPlayer.filters', 'soulPlayer.controllers', 'soulPlayer.services', 'soulPlayer.directives']).
  config(['$routeProvider', function($routeProvider) {
    $routeProvider.
      when('/albums', {templateUrl: 'partials/albums.html', controller: 'AlbumListCtrl'}).
      when('/albums/:albumId', {templateUrl: 'partials/album.html', controller: 'AlbumDetailCtrl'}).
      otherwise({redirectTo: '/albums'});
  }]);
