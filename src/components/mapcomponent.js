import React, { useRef, useEffect, useState } from "react";
import mapboxgl from "mapbox-gl";


mapboxgl.accessToken = 'pk.eyJ1Ijoib25ncmV2ZXJ6ZSIsImEiOiJjazlmZjMxcnAwYXQ4M2VvMzVzOGExMWhxIn0.RDgkBU9if_Q_O7iAfnA0_g';

const Map = (props) => {
  const mapContainerRef = useRef(null);

  // initialize map when component mounts
  useEffect(() => {
    const map = new mapboxgl.Map({
      container: mapContainerRef.current,
      // See style options here: https://docs.mapbox.com/api/maps/#styles
      style: "mapbox://styles/mapbox/streets-v11",
      center: [100.58494, 13.84108],
      zoom: 13.5
    });
    map.on('load', function () {
      map.resize();
    });

    map.on('click', (e) => {
      var _lat = e.lngLat.lat;
      var _long = e.lngLat.lng;
      console.log(_lat);
      console.log(_long);
      props.setLatlng({
        lat: _lat,
        lng: _long
      })

    });
    // add navigation control (zoom buttons)
    map.addControl(new mapboxgl.NavigationControl(), "bottom-right");

  }, []); // eslint-disable-line react-hooks/exhaustive-deps

  return <div className="map-container" ref={mapContainerRef} />;
};

export default Map;






















