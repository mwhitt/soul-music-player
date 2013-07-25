'use strict';

/* Directives */

angular.module('soulPlayer.directives', []).
  directive('audioPlayer', function() {
    return {
      restrict:'E',
      scope:{song:'=', album:'='},
      templateUrl:'partials/audio-player-directive.html',
      controller:function ($scope, $attrs) {
        var $audio = $('audio')[0];

        $scope.currentTime = 0;
        $scope.isPlaying = true;
        $scope.$watch('isPlaying', function() {
          $scope.playSymbol = $scope.isPlaying ? '❙❙' : '▶';
        });

        $scope.togglePlaying = function() {
          $scope.isPlaying ? $audio.pause() : $audio.play();
          $scope.isPlaying = !$scope.isPlaying;
        };
      }
    };
  }).
  directive('audioEvents', function() {
    return {
      restrict:'A',
      scope:true,
      link:function(scope, elem, attr, ctrl) {
        var $audio = $(elem)[0];
        elem.on('loadedmetadata', function() {
          scope.$apply(function() {
            scope.$parent.currentTime = 0;
            scope.$parent.isPlaying = true;
          });
        });
        elem.on('ended', function() {
          elem.load();
        });
        elem.on('timeupdate', function() {
          scope.$apply(function(){
            scope.$parent.currentTime = Math.floor($audio.currentTime);
          });
        });
      }
    };
  });
