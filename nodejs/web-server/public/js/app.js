console.log('Client side javascript file is loaded')

fetch('http://puzzle.mead.io/puzzle').then((response) => {
    response.json().then((data) => {
        console.log(data)
    })
})


const url = 'http://localhost:3000/weather?address=Boston'

fetch(url).then((response) => {
    response.json().then((data) => {
        if (!data) {
            return error
        }

        console.log(data)
    })
})