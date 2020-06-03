const request = require("postman-request");

const fetchGeocode = (location, callback) => {
  const key = "agtoSZtVum9tt9eSJ4tloFcwxAjIwI6x";
  const geoUrl = `http://open.mapquestapi.com/geocoding/v1/address?key=${key}&location=${location}`;
   request({ url: geoUrl, json: true }, (err, response) => {
      if (err) {
      callback("Failed to connect to Geo API", undefined);
      } else if (!response.body.results) {
         callback(response.body, undefined);
      } else {
      // will always return a geocode for the location
      const data = response.body.results[0].locations[0];
      const { latLng: { lat, lng }} = data;
      callback(undefined, { lat, lng});
      }
   });
};

module.exports = fetchGeocode;
