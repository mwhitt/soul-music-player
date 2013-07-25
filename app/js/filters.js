'use strict';

/* Filters */

angular.module('soulPlayer.filters', []).
  filter('formatDuration', function() {
    return function(duration) {
      var minutes = Math.floor(duration/60);
      var remainingSeconds = duration % 60;

      var result = '';
      if (remainingSeconds < 10) {
        result = "0";
      }

      result += String(remainingSeconds);

      result = minutes + ":" + result;

      return result;
    }
  }).
  filter('totalDuration', function() {
    return function(songs) {
      var durations = _.map(songs, function(song){ return parseInt(song.duration, 10); });
      var result = _.reduce(durations, function(total, duration){ return total + duration; }, 0);

      return result;
    }
  });
