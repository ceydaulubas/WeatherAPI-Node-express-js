const apiCall = cityName => {
    let apiKey = "f13c4a1e0110a21f84487056745a3c76";
    let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=${apiKey}&units=metric`
    axios
        .get(apiUrl)
        .then(getWeather)
        //     response => {
        //     const cityDetail = response.list.main.temp;
        //     document.getElementById('city').innerText = cityDetail;
        //   }
        //)
        .catch(err => {
            console.log(err);
            err.response.status === 404 ? alert(`The country ${cityName} doesn't exist.`) : alert('Server error! Sorry.');
        });
};
apiCall(amsterdam)

//   class weather{
//         constructor(city, temp, icon) {
//             this.city = city.name;
//             this.temp = temp;
//             this.icon = icon;
//         }
    
//         getter(city) {
//         }
    
//         setter(){
//         }
    
//     }

    function getWeather (response) {
        let city = document.querySelector("#city");
        city.innerHTML = response.data.name;
    
        let shownTemp = document.querySelector("#temp");
        shownTemp.innerHTML = Math.round(response.data.main.temp);
        currentCelsius = response.data.main.temp;
    
        let description = document.querySelector("#description");
        description.innerHTML = response.data.weather[0].description;
    
        let minToday = document.querySelector("#min-today");
        minToday.innerHTML = Math.round(response.data.main.temp_min);
        minTodayCel = response.data.main.temp_min;
    
        let maxToday = document.querySelector("#max-today");
        maxToday.innerHTML = Math.round(response.data.main.temp_max);
        maxTodayCel = response.data.main.temp_max;
    
        let windSpeed = document.querySelector("#wind-speed");
        windSpeed.innerHTML = Math.round(response.data.wind.speed * 3,6);
    
        let humidity = document.querySelector("#humidity");
        humidity.innerHTML = response.data.main.humidity;
    
        let sunrise = document.querySelector("#sunrise");
        sunrise.innerHTML = formatTime(response.data.sys.sunrise * 1000);
    
        let sunset = document.querySelector("#sunset");
        sunset.innerHTML = formatTime(response.data.sys.sunset * 1000);
      }
    
      let currentCelsius = null;
      let minTodayCel = null;
      let maxTodayCel = null;
    
    
