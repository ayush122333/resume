var deg = document.querySelector(".degree");
var desc = document.querySelector(".description");
var locName = document.querySelector(".loc-timezone");


window.addEventListener('load', () => {
    let long;
    let lat;
    // api key 3b0f98bc6b401e99c83de7f3829ae78f
    if(navigator.geolocation){
        navigator.geolocation.getCurrentPosition(position => {
            long = position.coords.longitude;
            lat = position.coords.latitude;
            
            const proxy = 'http://cors-anywhere.herokuapp.com/';  // not needed
            const api = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${long}&appid=3b0f98bc6b401e99c83de7f3829ae78f`;

            fetch(api).then(response => {
                return response.json();
            }).then(data => {
                console.log(data);
                
                var tempVal = data['main']['temp'] - 273.15;  //kelvin to celcius
                var descVal = data['weather'][0]['description'];
                var iconVal = data['weather'][0]['icon'];
                var nameVal = data['name'];

                deg.innerHTML = tempVal;
                desc.innerHTML = descVal;
                document.getElementById("icon").src = `http://openweathermap.org/img/wn/${iconVal}@2x.png`;
                locName.innerHTML = nameVal;
            });
        });
    }
});