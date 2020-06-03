const request = require("postman-request");

const getForecast = (lat, lng, callback) => {
  const key = "06241a79c7891a4da10ffe3f271d8905";
  const weatherUrl =
  `http://api.weatherstack.com/current?access_key=${key}&query=${lat},${lng}`;
  request({ url: weatherUrl, json: true }, (err, response) => {
    if (err) {
      callback("Failed to connect to Weather API", undefined);
    } else if (response.body.error) {
      callback(response.body.error.info, undefined);
    } else {
      const { location, current } = response.body;
      const report = 
        `Weather Report: \nLocation: ${location.name}, ${location.country} \nLocal Time: ${location.localtime}, Timezone: ${location.timezone_id} \nWeather: ${current.weather_descriptions[0]}. The current temperature is ${current.temperature}°C. Wind Speed is ${current.wind_speed}kph (${current.wind_dir}). Feels like ${current.feelslike}°C. Chance of rain is ${current.precip}%.
        `;
      callback(undefined, report);
    };
  });
};

module.exports = getForecast;