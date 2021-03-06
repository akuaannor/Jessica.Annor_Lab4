// Since we will be making use of 3rd party functions (eg. navigator.geolocation.getCurrentPosition) which are not native javascript functions we will need
// to add this function to the list of native javascript functions to allow javascript identify and execute it each time its called.
// This is done by using the addEventListener() function.
//
document.addEventListener("deviceready", onDeviceReady, false);


//We decide to create a function to handle the 3rd party functions (eg. navigator.geolocation.getCurrentPosition)
// which we earlier added to the native functions of the javascript
//permission to access location
var element = document.getElementById('mapview');
function onDeviceReady() {
    navigator.geolocation.watchPosition(onSuccess, onError);
}

// onSuccess Geolocation
function onSuccess(position) {
    var latitude = position.coords.latitude;
    var longitude = position.coords.longitude;
    var pos = new google.maps.LatLng(latitude, longitude);
    var mapview = document.getElementById('mapview');
    mapview.style.height = '250px';
    mapview.style.width = '500px';

    var myOptions = {
    center:pos,zoom:15,
    mapTypeId:google.maps.MapTypeId.ROADMAP,
    mapTypeControl:false,
    navigationControlOptions:{style:google.maps.NavigationControlStyle.SMALL}
    }

    var map = new google.maps.Map(document.getElementById("mapview"), myOptions);
    var marker = new google.maps.Marker({position:pos,map:map,title:"This is your current position"});
}

// function onSuccess(position) {
//
//     // var element = document.getElementById('geolocation');
//     element.innerHTML = 'Latitude: ' + position.coords.latitude  + '<br />' +
//         'Longitude: '          + position.coords.longitude             + '<br />' +
//         'Altitude: '           + position.coords.altitude              + '<br />' +
//         'Accuracy: '           + position.coords.accuracy              + '<br />' +
//         'Altitude Accuracy: '  + position.coords.altitudeAccuracy      + '<br />' +
//         'Heading: '            + position.coords.heading               + '<br />' +
//         'Speed: '              + position.coords.speed                 + '<br />' +
//         'Timestamp: '          + position.timestamp          + '<br />';
// }

// onError Callback receives a PositionError object
//
function onError(error) {
    alert('code: '    + error.code    + '\n' +
        'message: ' + error.message + '\n');
}
