 "use strict";

      function initMap() {
        var blundell_elem = {lat: 49.155, lng: -123.151};
        var grauer_elem = {lat: 49.155, lng: -123.174};
        var blundell_map = new google.maps.Map(document.getElementById('blundell_map'), {
          zoom: 12,
          center: blundell_elem
        });
        var marker = new google.maps.Marker({
          position: blundell_elem,
          map: blundell_map
        });

        var grauer_map = new google.maps.Map(document.getElementById('grauer_map'), {
          zoom: 12,
          center: grauer_elem
        });
        var marker = new google.maps.Marker({
          position: grauer_elem,
          map: grauer_map
        });
      }