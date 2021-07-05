const request = require("request");
const constants = require("../config");
const APIService = require("./APIService");
const Weather = require ("./Weather");


const weatherData = (address, callback) => {
    const apiService = new APIService(constants.openWeatherMap.BASE_URL , constants.openWeatherMap.API_KEY);
    const serviceParams = {
        q : encodeURIComponent(address)
    };

    apiService.get(serviceParams, (response) =>{
        if(response.status){
         const weatherObj = new Weather(response.data);
         
         const result = weatherObj.getWeatherInfo();
         const err = response.error;
         
         callback(err, result);
        }
        else{
            callback(response.message, response.data);
        }
    })

}


//     const url = constants.openWeatherMap.BASE_URL + encodeURIComponent(address) + "&appid=" + constants.openWeatherMap.API_KEY
//     console.log(url)
//     request({ url, json: true }, (error, { body }) => {
//         console.log(body);
//         // const weatherObject = new Weather(body);
//         if (error) {
//             callback("can't fetch data from open weather map api", undefined)
//         }
//         else if (!body.main || !body.main.temp || !body.name || !body.weather || body.humidity) {
//             callback("Required date can't be found, Please try another location", undefined)
//         }
//         else {
//             callback(undefined, {
//                 temperature: body.main.temp,
//                 description: body.weather[0].description,
//                 cityName: body.name,
//                 humidity: body.main.humidity
//             })
//         }
//     })
// }

module.exports = weatherData;