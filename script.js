require(["esri/Map", "esri/views/MapView"], (Map, MapView) => {
        const map = new Map({
          basemap: "osm"
        });

        const view = new MapView({
          container: "viewDiv",
          map: map,
          zoom: 9,
          center: [-105.9378, 34.6870] // longitude, latitude
        });
      });
