const express = require('express');
const app = express();
const axios = require('axios').default;

API_KEY = "f13c4a1e0110a21f84487056745a3c76";
const PORT =3000;

// app.use("/static", express.static(__dirname + '/customer'));

app.get('/', (req, res) =>{
  res.sendFile((__dirname + '/index.html'));
    // axios
    //   .get(`http://api.openweathermap.org/data/2.5/forecast?q=amsterdam&appid=${API_KEY}`)
    //   .then(resp => {
    //     let weatherDetail = resp.data;
    //     console.log('a single country details: ', weatherDetail);
    //     res.send(weatherDetail);
    //     // res.sendFile('index.html')
    //   })
    //   .catch(err => console.log(err));
  });

app.listen(PORT, () => console.log(`My app listening on port ${PORT}! `));