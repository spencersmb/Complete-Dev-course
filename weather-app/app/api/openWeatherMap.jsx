import axios from 'axios';

const OPEN_WEATHER_MAP_URL = 'http://api.openweathermap.org/data/2.5/weather?APPID=bf823927f2cc4c2c9b1657e67894b82f&units=imperial';

module.exports = {
  getTemp: function ( location ) {

    //browser friendly conversion
    let encodedLocation = encodeURIComponent(location);

    //build url
    let requestUrl = `${OPEN_WEATHER_MAP_URL}&q=${encodedLocation}`;

    //return a promise
    return axios.get(requestUrl).then(function ( result ) {

      //check for COD 200 or 400, and then if message is set - which is the error
      if(result.data.cod && result.data.message){
        throw new Error(result.data.message);
      }else {
        return result.data.main.temp;
      }
    }, function ( err ) {
      throw new Error(err.data.message);
    });
  }
};