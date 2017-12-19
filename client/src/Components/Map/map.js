import React, { Component } from 'react';
// import { withScriptjs, withGoogleMap, GoogleMap, Marker } from "react-google-maps"
// import { GoogleMapsLoader } from 'google-maps';
const google = window.google;

// const MyMapComponent = withScriptjs(withGoogleMap((props) =>
//     <GoogleMap
//         defaultZoom={13}
//         defaultCenter={{ lat: props.lat, lng: props.lng }}
//     >
//         {<Marker position={{ lat: props.lat, lng: props.lng }} />}
//     </GoogleMap>
// ))

// export default class Map extends Component {

//     render() {
//         const { lat, lng } = this.props.location;
//         return (

//             <MyMapComponent
//                 lat = {lat}
//                 lng = {lng}
//                 isMarkerShown
//                 googleMapURL="https://maps.googleapis.com/maps/api/js?key=AIzaSyDoXkSSqgDV07tBv42eBsKpoRBm4rJmMhQ&libraries=geometry,drawing,places"
//                 loadingElement={<div style={{ height: `100%` }} />}
//                 containerElement={<div style={{ height: `400px` }} />}
//                 mapElement={<div style={{ height: `100%` }} />}
//             />
//         );
//     }
// }

export default class Map extends Component {
  componentDidMount() {
    // this.initMap = initMap;
    let pos = this.props.location;
    let handleMapClick = this.props.addToList;
    this.map = this.initMap(this.map, pos, handleMapClick);
  }

  initMap(element, { lat, lng }, addToList) {
    const center = { lat, lng };

    const map = new google.maps.Map(element, {
      zoom: 14,
      center: center
    });

    const marker = new google.maps.Marker({
      position: { lat, lng },
      map: map
    });

    const searchBox = new google.maps.places.SearchBox(this.input);
    map.controls[google.maps.ControlPosition.TOP_LEFT].push(this.input);
    this.input.style.margin = 1 + 'em';
    this.input.style.padding = 1 + 'em';

    map.addListener('bounds_changed', function() {
      searchBox.setBounds(map.getBounds());
    });
    var markers = [];
    // Listen for the event fired when the user selects a prediction and retrieve
    // more details for that place.
    searchBox.addListener('places_changed', function() {
      var places = searchBox.getPlaces();

      if (places.length == 0) {
        return;
      }

      // Clear out the old markers.
      markers.forEach(function(marker) {
        marker.setMap(null);
      });
      markers = [];

      // For each place, get the icon, name and location.
      var bounds = new google.maps.LatLngBounds();
      places.forEach(function(place) {
        if (!place.geometry) {
          console.log('Returned place contains no geometry');
          return;
        }
        var icon = {
          url: place.icon,
          size: new google.maps.Size(71, 71),
          origin: new google.maps.Point(0, 0),
          anchor: new google.maps.Point(17, 34),
          scaledSize: new google.maps.Size(25, 25)
        };

        // Create a marker for each place.
        markers.push(
          new google.maps.Marker({
            map: map,
            icon: icon,
            title: place.name,
            position: place.geometry.location
          })
        );

        if (place.geometry.viewport) {
          // Only geocodes have viewport.
          bounds.union(place.geometry.viewport);
        } else {
          bounds.extend(place.geometry.location);
        }
      });
      map.fitBounds(bounds);
    });

    // const loc = new google.maps.LatLng(32, 32);
    // const service = new google.maps.places.PlacesService(map);

    // service.nearbySearch({ location: loc, radius: 50000, type: ['restaurant'] }, (data) => {
    //     console.log(data);
    // });

    var pyrmont = new google.maps.LatLng(-33.8665433, 151.1956316);
    var request = {
      location: pyrmont,
      radius: '500',
      type: ['restaurant']
    };

    // const service = new google.maps.places.PlacesService(map);
    // service.nearbySearch(request, (data) => {
    //     console.log(data.sort((a, b) => (
    //         a.rating - b.rating
    //     )
    //     ).reverse())
    //     // console.log(data);

    // });

    return map;
  }

  render() {
    return (
      <div>
        <input ref={input => (this.input = input)} />
        <div
          ref={el => {
            this.map = el;
          }}
          style={{ height: '70vh' }}
        />
      </div>
    );
  }
}
