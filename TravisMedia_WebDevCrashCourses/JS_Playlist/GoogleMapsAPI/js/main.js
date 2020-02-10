let map;

function initMap() {
  let options = {
    center: { lat: 33.487, lng: -117.143 },
    zoom: 8
  };

  map = new google.maps.Map(document.getElementById('map'), options);

  // // Murrieta
  // addMarker({
  //   coords: { lat: 33.553, lng: -117.213 },
  //   iconImage:
  //     'https://developers.google.com/maps/documentation/javascript/examples/full/images/beachflag.png',
  //   content: '<h1> Temecula CA</h1>'
  // });

  // //  Temecula
  // addMarker({ coords: { lat: 33.487, lng: -117.143 } });

  // Markers
  let markers = [
    {
      coords: { lat: 33.553, lng: -117.213 },
      iconImage:
        'https://developers.google.com/maps/documentation/javascript/examples/full/images/beachflag.png',
      content: '<h1> Temecula CA</h1>'
    },
    {
      coords: { lat: 33.487, lng: -117.143 }
    }
  ];

  markers.forEach(addMarker);

  // // Manually add marker and info window
  // let marker = new google.maps.Marker({
  //   position: { lat: 33.487, lng: -117.143 },
  //   map: map,
  //   icon:
  //     'https://developers.google.com/maps/documentation/javascript/examples/full/images/beachflag.png'
  // });

  // let infoWindow = new google.maps.InfoWindow({
  //   content: '<h1> Temecula CA</h1>'
  // });

  // marker.addListener('click', function() {
  //   infoWindow.open(map, marker);
  // });

  // add Marker
  function addMarker(props) {
    let marker = new google.maps.Marker({
      position: props.coords,
      map: map
      //icon: props.iconImage
    });

    // check for custom icon
    if (props.iconImage) {
      marker.setIcon(props.iconImage);
    }

    if (props.content) {
      let infoWindow = new google.maps.InfoWindow({
        content: props.content
      });

      marker.addListener('click', function() {
        infoWindow.open(map, marker);
      });
    }
  }
}
