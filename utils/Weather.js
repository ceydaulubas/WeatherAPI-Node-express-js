const APIService = require('./APIService');

// Open Weather Map API v2.5
class Weather{
    constructor(weatherDataObject){
        this._coord = {
            lat: weatherDataObject.coord.lat,
            lon: weatherDataObject.coord.lon
        };

        this._weather = {
            id: weatherDataObject.weather[0].id,
            main: weatherDataObject.weather[0].main,
            description: weatherDataObject.weather[0].description,
            icon: weatherDataObject.weather[0].icon
        };

        this._base = weatherDataObject.base;
        this._main = {
            temp: weatherDataObject.main.temperature,
            pressure: weatherDataObject.main.pressure,
            humidity: weatherDataObject.main.humidity,
            temp_min: weatherDataObject.main.temp_min,
            temp_max: weatherDataObject.main.temp_max,
            sea_level: weatherDataObject.main.sea_level,
            grnd_level: weatherDataObject.main.grnd_level
        };
        this._wind = {
            speed: weatherDataObject.wind.speed,
            deg: weatherDataObject.wind.deg
        };
        this._clouds = {
            all: weatherDataObject.clouds.all
        };
        this.getRain(weatherDataObject.rain);
        this.getSnow(weatherDataObject.snow);
        this._dt = weatherDataObject.dt;
        this._sys = {
            type: weatherDataObject.sys.type,
            id: weatherDataObject.sys.id,
            message: weatherDataObject.sys.message,
            country: weatherDataObject.sys.country,
            sunrise: weatherDataObject.sys.sunrise,
            sunset: weatherDataObject.sys.sunset
        };
        this._id = weatherDataObject.id; // City ID
        this._name = weatherDataObject.name; // City Name
        this._cod = weatherDataObject.cod;
    }

    get name(){
        return this._name;
    }

    get coord(){
        return this._coord;
    }
    get main(){
        return this._main;
    }
    get temperature(){
        return this._main.temp;
    }
    get humidity(){
        return this._main.humidity;
    }
    get pressure(){
        return this._main.pressure;
    }

    getRain(rainObject) {
        if(rainObject !== undefined) {
            this._rain = {
                "1h": (rainObject["1h"] === undefined ? 0 : rainObject["1h"]),
                "3h": (rainObject["3h"] === undefined ? 0 : rainObject["3h"]),
            };
        }else{
            this._rain = {
                "1h": 0,
                "3h": 0
            }
        }
    }

    get rain(){
        return this._rain;
    }


    getSnow(snowObject){
        if(snowObject !== undefined) {
            this._snow = {
                "1h": (snowObject["1h"] === undefined ? 0 : snowObject["1h"]),
                "3h": (snowObject["3h"] === undefined ? 0 : snowObject["3h"])
            };
        }else{
            this._snow = {
                "1h": 0,
                "3h": 0
            };
        }
    }

    get wind(){
        return this._wind;
    }
    get clouds(){
        return this._clouds;
    }

    get snow(){
        return this._snow;
    }

    get sys(){
        return this._sys;
    }

    dayOrNight(){
        if(this._weather.icon.includes('d') === 1){
            return true;
        }else if(this._weather.icon.includes('n') === 1){
            return false;
        }else {
            return true;
        }
    }

    sunriseTime(){
        return this._sys.sunrise;
    }
    sunsetTime(){
        return this._sys.sunset;
    }

    getConditionType(){
        const icon = this._weather.icon;
        if(icon.includes('01') || icon.includes('02')){
            return "weatherSunny";
        }else if(icon.includes('03') || icon.includes('04')){
            return "weatherCloudy";
        }else if(icon.includes('09') || icon.includes('10') || icon.includes('11')){
            return "weatherRainy";
        }else if(icon.includes('13')){
            return "weatherSnowy";
        }else if(icon.includes('50')){
            return "weatherFoggy";
        }
    }

    getWeatherInfo(){
        return {
            cityName: this._name,
            description: this._weather.description.charAt(0).toUpperCase() + this._weather.description.slice(1),
            conditionType: this.getConditionType(),
            temperature: this.temperature,
            humidity: this.humidity,
            wind: this.wind,
            rain: this.rain,
            pressure: this.pressure,
            minTemp: this.main.temp_min,
            maxTemp: this.main.temp_max,
            seaLevel: this.main.sea_level
        }
    }
}

module.exports = Weather;