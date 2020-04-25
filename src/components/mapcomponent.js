import React, { useRef, useEffect } from "react";
import mapboxgl from "mapbox-gl";


mapboxgl.accessToken = 'pk.eyJ1Ijoib25ncmV2ZXJ6ZSIsImEiOiJjazlmZjMxcnAwYXQ4M2VvMzVzOGExMWhxIn0.RDgkBU9if_Q_O7iAfnA0_g';

const Map = () => {
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

    map.on('click', function(e) {
      alert(e.lngLat.wrap());
  });
    // add navigation control (zoom buttons)
    map.addControl(new mapboxgl.NavigationControl(), "bottom-right");


  }, []); // eslint-disable-line react-hooks/exhaustive-deps

  return <div className="map-container" ref={mapContainerRef} />;
};

export default Map;


// import React, { Component } from 'react';
// import ReactDOM from 'react-dom';
// import mapboxgl from 'mapbox-gl';

// mapboxgl.accessToken = 'pk.eyJ1Ijoib25ncmV2ZXJ6ZSIsImEiOiJjazlmZjMxcnAwYXQ4M2VvMzVzOGExMWhxIn0.RDgkBU9if_Q_O7iAfnA0_g';

// export default class Map extends Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//       lat: 13.98719,
//       lng: 100.60588,
//       zoom: 15,
//     };
//   }
//   componentDidMount() {
//     const map = new mapboxgl.Map({
//       container: this.mapContainer,
//       style: 'mapbox://styles/mapbox/dark-v9',
//       center: [this.state.lng, this.state.lat],
//       zoom: this.state.zoom
//     });
//     var el = document.createElement('div');
//     el.className = 'marker';
//     new mapboxgl.Marker(el)
//       .setLngLat([-122.4, 37.7])
//       .addTo(map);
//   }
//     render() {
//       return (
//         <div>
//           <div ref={el => this.mapContainer = el} />
//         </div>
//       )
//     }
//   }






















