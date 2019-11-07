const request = require('request');

const geocode = require('./utils/geocode')

// const url = 'https://api.darksky.net/forecast/90c6b702f679d77d345156a0e00cd0be/37.8267,-122.4233';

// request({ url: url, json: true }, (error, response) => {
//     if (error) {
//         console.log('Unable to connect to weather service!')
//     } else if (response.body.error) {
//         console.log('Unable to find location')
//     } else {
//         const currentTemp = response.body.currently.temperature
//         const currentPrecipProb = response.body.currently.precipProbability

//         console.log(`${response.body.daily.data[0].summary} It is currently ${currentTemp} degrees out. There is a ${currentPrecipProb}% chance of rain.`)
//     }
// })

// const geocodeURL = 'https://api.mapbox.com/geocoding/v5/mapbox.places/houston.json?access_token=pk.eyJ1IjoiZXRvZ3JhMSIsImEiOiJjazJtb3JoOTgwazdrM25wbnEyNTVmbnB5In0.kyBEyR4BHXi9PoyBFOLkmQ&limit=1';

// request({ url: geocodeURL, json: true }, (error, response) => {
//     if (error) {
//         console.log('Unable to connect to location services!')
//     } else if (response.body.features.length === 0) {
//         console.log('Invalid location entered!')
//     } else {
//         const longitude = response.body.features[0].center[0]
//         const latitude = response.body.features[0].center[1]
//         console.log(longitude, latitude)    
//     }

// })


geocode('destin', (error, data) => {
    console.log('Error', error)
    console.log('Data', data)
})