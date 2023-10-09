/*
    Assignment #4
    Eric Workman
*/

$(function () {
    // your code here
    var elMap = document.getElementById('locationhere');
    var failMsg = "I'm sorry, we werent able to get your location for you";
        if (Modernizer.geolocation) 
        {
            navigator.geolocation.getCurrentPosition(success, fail);
            elMap.textContent = 'Checking location.';
        }else{
            elMap.textContent = failMsg;
        }

        function success(position)
        {
            msg = '<h3>Longitude:<br>';
            msg += position.coords.Longitude + '</h3>';
            msg += '<h3>Latitude:<br>';
            msg += position.coords.Latitude + '</h3>';
            elMap.innerHTML = msg;
        }

        function fail(msg) 
        {
            elMap.textContent = msg;
            console.log(msg.code);
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


