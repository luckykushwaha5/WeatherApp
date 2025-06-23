const url = "http://api.weatherapi.com/v1/current.json?key=6fb15813568a413ab7c51346252306&q=Jaipur&aqi=no";
const input = document.querySelector(".search-bar input");
const button = document.querySelector(".search-btn");
const img = document.querySelector(".weather img");
const temp = document.querySelector(".temp p");
const city = document.querySelector(".city p");
const humidity = document.querySelector(".leftData p");
const wind = document.querySelector(".rightData p");
const bg = document.getElementById('bg-animation');

// console.log(temp.innerText);
// console.log(city.innerText);
// console.log(humidity.innerText);
// console.log(wind.innerText);  "°c"

button.addEventListener("click",async (evt) => {
    console.log("Button Clicked...");
    const inputData = input.value.toLowerCase();
    const newUrl = `http://api.weatherapi.com/v1/current.json?key=6fb15813568a413ab7c51346252306&q=${inputData}&aqi=no`
    const response = await fetch(newUrl);
    const responseData = await response.json();
    console.log(responseData.current);
    console.log(responseData.current["temp_c"]);
    temp.innerText = responseData.current["temp_c"] +"°c";
    city.innerText = responseData.location["name"];
    humidity.innerText = responseData.current["humidity"];
    wind.innerText = responseData.current["wind_kph"] +"km/h";
    let day = (responseData.current["condition"].text);
    console.log(day);
    checkWeather(day);

})

function checkWeather(day){
    if(day === "Sunny" || day === "Clear"){
        img.src = `images/sunny.png`;
    }
    else if(day === "Patchy light rain" || day === "Rain" || day === "Patchy rain nearby" || day === "Light rain shower"){
        img.src = `images/rain.png`;
    }
    else if(day === "Mist" || day === "Fog" || day === "Haze"){
        img.src = `images/mist.png`;
    }
    else if(day === "Partly Cloudy" || day === "Overcast" || day === "Clouds"){
        img.src = `images/partly cloudy.png`;
    }
    else if(day === "Snow"){
        img.src = `images/snow.png`;
    }
}
