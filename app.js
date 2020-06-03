const fetchGeocode = require('./utils/fetch_geocode');
const getForecast = require('./utils/get_forecast');

// const location = "south korea";
const location = process.argv[2];

fetchGeocode(location, (err, data) => {
  if (err) { 
    console.log(err); 
  } else {
    const {lat, lng} = data;
    console.log(data);
    getForecast(lat, lng, (err, data) => {
      err ? console.log(err) : console.log(data);
    });
  };
}); 

console.log(process.argv);