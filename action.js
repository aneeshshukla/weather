const apiKey = "b98b55d47c726b7f068ddb6f44c39d6d";
const apiUrl = "https://api.openweathermap.org/data/2.5/weather?units=metric";
var countrycode = "IN";
const location = localStorage.getItem('add');



// fetch(apiUrl)
//     .then(response => response.json())
//     .then(data => {
//         const temp = document.getElementById('weather');
//         const temperature = (data.main.temp - 273.15).toFixed(1); // Convert from Kelvin to Celsius
//         const description = data.weather[0].description;
//         temp.innerHTML = `Temperature: ${temperature}&deg;C<br>Description: ${description}`;
//         console
//     });


function saveadd() {
    localStorage.setItem('add', document.getElementById("add").value);
    document.getElementById("cityname").innerHTML = localStorage.getItem('add');
    console.log(location);
     
};

async function checkWeather() {
    const response = await fetch(apiUrl + '&appid=${apiKey}&q=${location}');
    var data = await response.json();
    console.log(data);

}
checkWeather()