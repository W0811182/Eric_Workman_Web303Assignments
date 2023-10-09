/*
    Assignment #4
    Eric Workman
    
*/
/* global $ */
/* global Modernizer */
$(function () {
    // your code here
    
    var geoLoc = localStorage.getItem("Longitude");
    console.log(geoLoc);

    var elMap = document.getElementById('locationhere');                 
    var msg = 'Sorry, we were unable to get your location.';   

if (geoLoc !== null)
{  
    var storedLat = localStorage.getItem("Latitude");
    var storedLong = localStorage.getItem("Longitude");
    console.log(storedLong, storedLat);
    
    
    if (Modernizr.geolocation) {                             
        navigator.geolocation.getCurrentPosition(success, fail);  
        elMap.textContent = 'Checking location...';              
      } else {                                                   
        elMap.textContent = msg;                                 
      }
      
      function success(position) {    
        msg = '<h3>Longitude:<br>';                        
        msg += localStorage.getItem("Longitude") + '</h3>';        
        msg += '<h3>Latitude:<br>';                               
        msg += localStorage.getItem("Latitude") + '</h3>';
        var distance = calcDistanceBetweenPoints(storedLat, storedLong, position.coords.latitude, position.coords.longitude)
        msg += "</h1><h1>Welcome back User!</h1>"
        elMap.innerHTML = msg + "<h1>you have traveled " + distance + " meters ("+distance/1000+"km) since you last logged in!";      
        
        
        localStorage.setItem("Longitude", position.coords.longitude);
        localStorage.setItem("Latitude", position.coords.latitude);                                     
      }
      
      function fail(msg) {                                        
        elMap.textContent = msg;                                  
        console.log(msg.code);                                    
      }
                           
}
else
{
    if (Modernizr.geolocation) {                             
        navigator.geolocation.getCurrentPosition(success, fail);  
        elMap.textContent = 'Checking location...';              
      } else {                                                   
        elMap.textContent = msg;                                 
      }
      
      function success(position) {    
        msg = '<h1>Hello New User!</h1><br>'                 
        msg += '<h3>Longitude:<br>';                        
        msg += position.coords.longitude + '</h3>';        
        msg += '<h3>Latitude:<br>';                               
        msg += position.coords.latitude + '</h3>';
        elMap.innerHTML = msg; 

        localStorage.setItem("Longitude", position.coords.longitude);
        localStorage.setItem("Latitude", position.coords.latitude);    
        
      }
      
      function fail(msg) {                                        
        elMap.textContent = msg;                                  
        console.log(msg.code);                                    
      }
}



    // DO NOT EDIT ANY CODE IN THIS FUNCTION DEFINTION
    // function to calculate the distance in metres between two lat/long pairs on Earth
    // Haversine formula - https://en.wikipedia.org/wiki/Haversine_formula
    // Aren't those cool variable names? Yah gotta love JavaScript
    function calcDistanceBetweenPoints(lat1, lon1, lat2, lon2) {
        var toRadians = function (num) {
            return num * Math.PI / 180;
        }
        var R = 6371000; // radius of Earth in metres
        var φ1 = toRadians(lat1);
        var φ2 = toRadians(lat2);
        var Δφ = toRadians(lat2 - lat1);
        var Δλ = toRadians(lon2 - lon1);

        var a = Math.sin(Δφ / 2) * Math.sin(Δφ / 2) + Math.cos(φ1) * Math.cos(φ2) * Math.sin(Δλ / 2) * Math.sin(Δλ / 2);
        var c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));

        return (R * c);
    }
});


