const path = require('path');
const express = require('express');

console.log(__dirname)

const app = express()
const publicDirectoryPath = path.join(__dirname, '../public')
console.log(path.join(publicDirectoryPath, '/about.html'))

app.use(express.static(publicDirectoryPath))

app.get('/weather', (req, res) => {
    res.send({
        forcast: 'It is 50 degrees.',
        location: 'Houston '
    })
})


app.listen(3000, () => {
    console.log('Server is up on port 3000')
})