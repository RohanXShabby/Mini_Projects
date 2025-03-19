const apiKey = "81b2b6a0a188761b81dfa1abf1ac6d3b";
const apiUrl = "https://api.openweathermap.org/data/2.5/weather?units=metric&q=";

const searchbox = document.querySelector(".navbar input")
const searchbtn = document.querySelector(".navbar button")
const weatherIcon = document.querySelector(".container .main img")



async function checkWeather(city) {
    const response = await fetch(apiUrl + city + `&appid=${apiKey}`);
    if (response.status == 404) {
        document.querySelector('.temp').innerHTML = "0";
        document.querySelector('.city').innerHTML = "Invalid City!";
        document.querySelector('.humidity-value').innerHTML = "0";
        document.querySelector('.wind-value').innerHTML = "0";
    }

    else {

        var data = await response.json();
        document.querySelector('.temp').innerHTML = Math.round(data.main.temp) + "°c";
        document.querySelector('.city').innerHTML = data.name;
        document.querySelector('.humidity-value').innerHTML = data.main.humidity + "%";
        document.querySelector('.wind-value').innerHTML = Math.round(data.wind.speed) + " Km/H";

        if (data.weather[0].main == "Clouds") {
            weatherIcon.src = "Images/clouds.png";
        }
        else if (data.weather[0].main == "Clear") {

            weatherIcon.src = "Images/clear.png";
        }
        else if (data.weather[0].main == "Drizzle") {

            weatherIcon.src = "Images/drizzle.png";
        }
        else if (data.weather[0].main == "Mist") {

            weatherIcon.src = "Images/mist.png";
        }
        else if (data.weather[0].main == "Rain") {

            weatherIcon.src = "Images/rain.png";
        }
        else if (data.weather[0].main == "Snow") {

            weatherIcon.src = "Images/snow.png";
        }
    }

}

searchbtn.addEventListener("click", () => {
    checkWeather(searchbox.value);
})
searchbox.addEventListener("keydown", (event) => {
    if (event.key === "Enter") {
        searchbtn.click();
    }
});


