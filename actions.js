var apiUrl = "https://api.openweathermap.org/data/2.5/weather?units=metric&q=" + document.getElementById("add").value /*localStorage.getItem('location')*/;
const myapiUrl = "https://api.openweathermap.org/data/2.5/weather?units=metric";

const wicon = document.querySelector(".weathericon");

var type = 1;
function loadicon(){
    if (data.weather[0].main == 'Clouds') {
        wicon.src = "images/new icons/clouds.png";
    }
    else if (data.weather[0].main == 'Clear') {
        wicon.src = "images/new icons/clear.png";
    }
    else if (data.weather[0].main == 'Rain') {
        wicon.src = "images/new icons/rain.png";
    }
    else if (data.weather[0].main == 'Drizzle') {
        wicon.src = "images/new icons/drizzle.png";
    }
    else if (data.weather[0].main == 'Mist') {
        wicon.src = "images/new icons/mist.png";
    }
    else if (data.weather[0].main == 'Snow') {
        wicon.src = "images/new icons/snow.png";
    }
    else if (data.weather[0].main == 'Haze') {
        wicon.src = "images/new icons/haze.png";
    }
    document.querySelector(".climateinfo").innerHTML = data.weather[0].description;
}
async function checkWeather() {
    const responce = await fetch(apiUrl + apiKey);
    var data = await responce.json();

    if(responce.status == 404){
        infoshow.innerHTML = "Location Not Found";
        alert("Location Not Found");
    };

    console.log(data);

    document.querySelector('.cityname').innerHTML = data.name + ", " + data.sys.country;
    document.querySelector('.temp').innerHTML = Math.round(data.main.temp) + "°c";
    document.querySelector('.humidity').innerHTML = data.main.humidity + "%";
    document.querySelector('.humid').title = data.main.humidity + "%";
    document.querySelector('.wind').innerHTML = data.wind.speed + " km/h";
    document.querySelector('.windy').title = data.wind.speed + " km/h";



     if (data.weather[0].main == 'Clouds') {
        wicon.src = "images/new icons/clouds.png";
    }
    else if (data.weather[0].main == 'Clear') {
        wicon.src = "images/new icons/clear.png";
    }
    else if (data.weather[0].main == 'Rain') {
        wicon.src = "images/new icons/rain.png";
    }
    else if (data.weather[0].main == 'Drizzle') {
        wicon.src = "images/new icons/drizzle.png";
    }
    else if (data.weather[0].main == 'Mist') {
        wicon.src = "images/new icons/mist.png";
    }
    else if (data.weather[0].main == 'Snow') {
        wicon.src = "images/new icons/snow.png";
    }
    else if (data.weather[0].main == 'Haze') {
        wicon.src = "images/new icons/haze.png";
    }
    document.querySelector(".climateinfo").innerHTML = data.weather[0].description;


    // console.clear();
    infoshow.innerHTML = "Showing Data From Search";
    document.getElementById("add").value = data.name;
    type = 2;

    document.getElementById("details").style.display = "flex";
    document.querySelector(".temp").style.display = "block";

}

async function checkmyWeather(latitude, longitude) {

    // document.getElementById("add").value = localStorage.getItem('location');

    const responce = await fetch(myapiUrl + "&lat=" + latitude + "&lon=" + longitude + apiKey);
    var data = await responce.json();

    console.log(data);

    document.querySelector('.cityname').innerHTML = data.name + ", " + data.sys.country;
    document.querySelector('.temp').innerHTML = Math.round(data.main.temp) + "°c";
    document.querySelector('.humidity').innerHTML = data.main.humidity + "%";
    document.querySelector('.humid').title = data.main.humidity + "%";
    document.querySelector('.wind').innerHTML = data.wind.speed + " km/h";
    document.querySelector('.windy').title = data.wind.speed + " km/h";

    console.clear();
    infoshow.innerHTML = "Showing Data From GPS Location";
    document.getElementById("add").value = data.name;
    type = 1;
    document.getElementById("details").style.display = "flex";
    document.querySelector(".temp").style.display = "block";

    
     if (data.weather[0].main == 'Clouds') {
        wicon.src = "images/new icons/clouds.png";
    }
    else if (data.weather[0].main == 'Clear') {
        wicon.src = "images/new icons/clear.png";
    }
    else if (data.weather[0].main == 'Rain') {
        wicon.src = "images/new icons/rain.png";
    }
    else if (data.weather[0].main == 'Drizzle') {
        wicon.src = "images/new icons/drizzle.png";
    }
    else if (data.weather[0].main == 'Mist') {
        wicon.src = "images/new icons/mist.png";
    }
    else if (data.weather[0].main == 'Snow') {
        wicon.src = "images/new icons/snow.png";
    }
    else if (data.weather[0].main == 'Haze') {
        wicon.src = "images/new icons/haze.png";
    }
    document.querySelector(".climateinfo").innerHTML = data.weather[0].description;
}

function saveadd() {
    localStorage.setItem('location', document.getElementById("add").value);
}

function getweather() {

    apiUrl = "https://api.openweathermap.org/data/2.5/weather?units=metric&q=" + document.getElementById("add").value;
    checkWeather();
}


let userLocation = navigator.geolocation;
const infoshow = document.querySelector(".infoshow");
mygeolocater();
document.getElementById("add").value = "";
function mygeolocater() {
    infoshow.innerHTML = "Getting Location...";
    if (userLocation) {
        userLocation.getCurrentPosition(success);
        
        // console.log("check");

    } else {
        alert("The geolocation API is not supported by your browser. Enter City Name to get Information");
        infoshow.innerHTML = "Browser Not Supported";
    }
}
function success(data) {
    
    infoshow.innerHTML = "Getting Location...";
    let lat = data.coords.latitude;
    let long = data.coords.longitude;
    console.log("Latitude: "
        + lat
        + " Longitude: "
        + long)
    checkmyWeather(lat, long);
    
}

