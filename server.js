const express = require('express');
const app = express();
const axios = require('axios').default;

const PORT =3000;
const API_KEY = "f13c4a1e0110a21f84487056745a3c76";

app.get('/', (req, res, next) =>{
    axios
      .get(`http://api.openweathermap.org/data/2.5/forecast?q=amsterdam&appid=${API_KEY}`)
      .then(resp => {
        const weatherDetail = resp.data;
        console.log('a single country details: ', weatherDetail);
        res.send(weatherDetail);
      })
      .catch(err => console.log(err));
  });

app.listen(PORT, () => console.log(`My app listening on port ${PORT}! `));