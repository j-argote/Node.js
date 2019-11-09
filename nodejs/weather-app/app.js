const geocode = require('./utils/geocode')
const forecast = require('./utils/forecast')

//mapbox api call
geocode('destin', (error, data) => {
    console.log('Error', error)
    console.log('Data', data)
})

//darksky weather api
forecast(-75.7088, 44.1545, (error, data) => {
    console.log('Error', error)
    console.log('Data', data)
})