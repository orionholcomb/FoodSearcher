var mapCenter = { lat: -34.397, lng: 150.644 };
var map;

function initMap() {
  map = new google.maps.Map(document.getElementById("mapSpot"), {
    center: mapCenter,
    zoom: 12
  });
}

function getLatLng(e) {
  e.preventDefault();

  var api = "https://maps.googleapis.com/maps/api/geocode/json?address=";
  var zipcode = $("#userZip")
    .val()
    .trim();
  var apiKey = "&key=AIzaSyCLMuYfFilr8RmhGeZEExjIb4HIZAlXd54";
  console.log(zipcode);

  const queryURL2 = api + zipcode + apiKey;

  $.ajax({
    url: queryURL2,
    method: "GET"
  }).then(function(response) {
    console.log(response.results[0].geometry.location);
    mapCenter = response.results[0].geometry.location;
    initMap();
  });
}

$("#gymFind").on("click", getLatLng);
