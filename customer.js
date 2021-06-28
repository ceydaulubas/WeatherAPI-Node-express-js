
// fetch('http://localhost:3000')
//   .then(response => response.json())
//   .then(forecast => alert(forecast.list.main.temp)); 


  const getCityInfo = cityName => {
    axios
      .get('http://localhost:3000/')
      .then(response => {
        const cityDetail = response.data.ciy.name;
        document.getElementById('city-name').innerText = cityDetail;
      })
      .catch(err => {
        console.log(err);
        err.response.status === 404 ? alert(`The country ${cityName} doesn't exist.`) : alert('Server error! Sorry.');
      });
  };

  getCityInfo(istanbul)



// class Weather{
//     constructor(city, temp, icon) {
//         this.city = city;
//         this.temp = temp;
//         this.icon = icon;
//     }

//     getter(city) {
//     }

//     setter(){
//     }
// }
