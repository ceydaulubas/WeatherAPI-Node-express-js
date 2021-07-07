let fetchWeather = "/weather";
const weatherData = require("../../utils/weatherData");

const weatherForm = document.querySelector("form");
const search = document.querySelector("input");

const weatherIcon = document.querySelector(".weatherIcon");
const weatherCondition = document.querySelector(".weatherCondition");
const tempElement = document.querySelector(".temperature");
const humidityElement = document.querySelector(".humidity")
const locationElement = document.querySelector(".place");
const dateElement = document.querySelector(".date");

const monthName = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'June', 'July', 'Aug', 'Sept', 'Oct', 'Nov', 'Dec'];
dateElement.textContent = new Date().getDate() + "," + monthName[new Date().getMonth()].substring(0, 3);

weatherForm.addEventListener("submit", (event) => {
    event.preventDefault();

    locationElement.textContent = "loading..";
    locationElement.textContent = "";
    weatherCondition.textContent = "";

    weatherData(search.value, (message, { temperature, description, cityName, humidity }) => {
        if (message) {
            locationElement.textContent = message;
            tempElement.textContent = "";
            weatherCondition.textContent = "";
        }
        else {
            locationElement.textContent = cityName;
            tempElement.textContent = (temperature).toFixed(2) + String.fromCharCode(176);
            weatherCondition.textContent = description;
            humidityElement.textContent = (humidity) + String.fromCharCode(37);
        }
    })


    // const locationApi = fetchWeather + "?address=" + search.value;
    // fetch(locationApi)
    //     .then(response => {
    //         console.log(response);
    //         response.json()
    //         .then(data => {
    //             if (data.error) {
    //                 locationElement.textContent = data.error;
    //                 tempElement.textContent = "";
    //                 weatherCondition.textContent = "";
    //             }
    //             else {
    //                 console.log(data)
    //                 locationElement.textContent = data.cityName;
    //                 tempElement.textContent = (data.maxTemp).toFixed(2)+ String.fromCharCode(176);
    //                 weatherCondition.textContent = data.description;
    //                 humidityElement.textContent = (data.humidity);
    //             }
    //         })
    //     });
})