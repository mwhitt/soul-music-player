'use strict';

/* Controllers */

angular.module('soulPlayer.controllers', []).
  controller('AlbumListCtrl', ['$scope', '$http', function($scope, $http) {
    $http.get('albums/albums.json').success(function(data) {
      $scope.albums = data;
    });
    $scope.orderProp = 'title';
  }]).
  controller('AlbumDetailCtrl', ['$scope', '$routeParams', '$http', 'audioSource', function($scope, $routeParams, $http, audioSource) {
    $http.get('albums/' + $routeParams.albumId + '.json').success(function(data) {
      $scope.album = data;
    });
    $scope.play = function(album, song) {
      audioSource.setSrc({ 'album': album, 'song': song });
    };
  }]).
  controller('NowPlayingCtrl', ['$scope', 'audioSource', function($scope, audioSource) {
    $scope.getAlbum = function() {
      return audioSource.getAlbum();
    };
    $scope.getSong = function() {
      return audioSource.getSong();
    };
  }]);
