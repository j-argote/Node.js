const request = require('request');

const url = 'https://api.darksky.net/forecast/90c6b702f679d77d345156a0e00cd0be/37.8267,-122.4233';

request({ url: url, json: true }, (error, response) => {
    // console.log(response.body.currently)
    const currentTemp = response.body.currently.temperature
    const currentPrecipProb = response.body.currently.precipProbability

    return console.log(`It is currently ${currentTemp} degrees out. There is a ${currentPrecipProb}% chance of rain.`)
})