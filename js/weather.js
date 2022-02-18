
const API_KEY = "933f564c494cf671baede2575150ce03"


function onGeoOk(position) {
    const lat =  position.coords.latitude;
    const lon =  position.coords.longitude; 
    const url =`http://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}&units=metric`;
    fetch(url)
    .then(response => response.json())
    .then(data => {
        const weather = document.querySelector("#weather span:first-child")
        const city = document.querySelector("#weather span:last-child")
        city.innerText = data.name;
        weather.innerText = `${data.weather[0].main} / ${data.main.temp}`;
    });
}

function onGeoError() {
    alert("Can't find you. There's No weatehr info for you.");
}

navigator.geolocation.getCurrentPosition(onGeoOk, onGeoError);




