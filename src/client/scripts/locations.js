 var map;

 function initialize() {
     var center = new google.maps.LatLng(38.885421, -77.176552);

     var mapOptions = {
         zoom: 11,
         center: center,
         mapTypeId: google.maps.MapTypeId.ROADMAP
     };
     var map = new google.maps.Map(document.getElementById('map'),
         mapOptions);

//---- Location 1   ----/
     var marker1 = new google.maps.Marker({
         position: new google.maps.LatLng(38.885421, -77.176552),
         map: map,
         title: "Herndon Shop"
     });
//---- Location 2   ----/
     var marker2 = new google.maps.Marker({
         position: new google.maps.LatLng(38.861365, -77.083511),
         map: map,
         title: "Arlington Megacomplex"
     });
//---- Location 3   ----/
     var marker3 = new google.maps.Marker({
         position: new google.maps.LatLng(38.933041, -77.161274),
         map: map,
         title: "McLean Main Offices"
     });


     if (navigator.geolocation) {
         navigator.geolocation.getCurrentPosition(function(position) {
             initialLocation = new google.maps.LatLng(position.coords.latitude, position.coords.longitude);
             map.setCenter(initialLocation);
         });
     }
 }
 initialize();
