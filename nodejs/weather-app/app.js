const request = require('request');

const url = 'https://api.darksky.net/forecast/90c6b702f679d77d345156a0e00cd0be/37.8267,-122.4233';

request({ url: url, json: true }, (error, response) => {
    // console.log(response.body.currently)
    const currentTemp = response.body.currently.temperature
    const currentPrecipProb = response.body.currently.precipProbability

    return console.log(`${response.body.daily.data[0].summary} It is currently ${currentTemp} degrees out. There is a ${currentPrecipProb}% chance of rain.`)
})



const geocodeURL = 'https://api.mapbox.com/geocoding/v5/mapbox.places/Los%20Angeles.json?access_token=pk.eyJ1IjoiZXRvZ3JhMSIsImEiOiJjazJtb3JoOTgwazdrM25wbnEyNTVmbnB5In0.kyBEyR4BHXi9PoyBFOLkmQ&limit=1';

request({ url: geocodeURL, json: true }, (error, response) => {
    const long = response.body.features[0].center[0]
    const lat = response.body.features[0].center[1]
    console.log(long, lat)
})