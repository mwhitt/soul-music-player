'use strict';

/* Services */

angular.module('soulPlayer.services', []).
  factory('audioSource', function() {
    var album, song;

    //factory function body that constructs audioSource instance
    return {
      getAlbum: function() {
        return album;
      },
      getSong: function() {
        return song;
      },
      setSrc: function(src) {
        album = src.album;
        song = src.song;
      }
    };
  });
