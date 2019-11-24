console.log('Client side javascript file is loaded')

const url = 'http://localhost:3000/weather?address=boston'

fetch(url).then((response) => {
    response.json().then(({error, location, forecast}) => {
        if (error) {
            return console.log(error)
        }

        console.log(location)
        console.log(forecast)
    })
})