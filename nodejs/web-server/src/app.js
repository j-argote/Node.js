// Core node modules
const path = require('path');
// npm modules
const express = require('express');

const app = express()
const publicDirectoryPath = path.join(__dirname, '../public')

app.set('view engine', 'hbs')
app.use(express.static(publicDirectoryPath))

app.get('', (req, res) => {
    res.render('index', {
        title: 'Weather',
        name: 'John Argote'
    })
})

app.get('/about', (req, res) => {
    res.render('about', {
        title: 'About Me',
        name: 'John Argote'
    })
})

app.get('/help', (req, res) => {
    res.render('help', {
        message: 'This is the help page!'
    })
})

app.get('/weather', (req, res) => {
    res.send({
        forcast: 'It is 50 degrees.',
        location: 'Houston '
    })
})


app.listen(3000, () => {
    console.log('Server is up on port 3000')
})