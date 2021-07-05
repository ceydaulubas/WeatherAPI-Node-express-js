const request = require("request");
const constants = require("../config");
const axios = require('axios');
const serviceResponse = require('./ServiceResponse')

class APIService {
    constructor(inAPIURL, inAPIKey) {
        this.service = axios;
        this.apiURL = inAPIURL;
        this.apiKey = inAPIKey;
    }

    get(params, callback) {
        params.appid = this.apiKey;
        console.log(this.apiURL)
        return this.service
            .get(this.apiURL, {
                params: {
                    appid: params.appid,
                    q: params.q
                }
            })
            .then((response) => {
                console.log(`Response is`)
                const responseObj = new serviceResponse();
                responseObj.status = true;
                responseObj.statusCode = response.status;
                responseObj.data = response.data;
                callback(responseObj);
            })
            .catch((e) => {
                console.log(`Respvfvvvgfvonse is`)
                console.log(`Erorr is ${e}`);
                const responseObj = new serviceResponse();
                responseObj.status = false;
                // responseObj.statusCode= response.status;
                responseObj.error = e;
                // responseObj.data= response.data;
                callback(responseObj);
            })
    }

    post(params, callback) {
        params.appid = this.apiKey;
        return this.service.request({
            method: 'POST',
            url: this.apiURL,
            responseType: 'json',
            data: params
        }).then((response) => {
            const responseObj = new serviceResponse();
            responseObj.status = true;
            responseObj.statusCode = response.status;
            responseObj.message = response.message;
            responseObj.data = response.data;
            callback(responseObj);
        })
            .catch((e) => {
                const responseObj = new serviceResponse();
                responseObj.status = false;
                responseObj.statusCode = response.status;
                responseObj.message = "Error...";
                responseObj.data = response.data;
                callback(responseObj);
            })
    }

    // patch()

    // put()

    // delete()
}

module.exports = APIService;