console.log('Client side javascript file is loaded')

const weatherForm = document.querySelector('form')
const search = document.querySelector('input')
const messageOne = document.querySelector('#message-1')
const messageTwo = document.querySelector('#message-2')

weatherForm.addEventListener('submit', (e) => {
    e.preventDefault()

    const location = search.value
    const url = `http://localhost:3000/weather?address=${location}`

    messageOne.textContent = 'Loading...'

    fetch(url).then((response) => {
        response.json().then(({ error, location, forecast }) => {
            if (error) {
                messageOne.textContent = error
                messageTwo.textContent = ''
            } else {
                messageOne.textContent = location
                messageTwo.textContent = forecast
            }
        })
    })
})