const fs = require('fs');

// Challenge
// load and parse JSON data
const dataBuffer = fs.readFileSync('1-json.json');
const dataJSON = dataBuffer.toString();
const parsedData = JSON.parse(dataJSON);

// Change name and age
parsedData.name = 'John';
parsedData.age = 28;

// Convert updated object into JSON string
const updatedData = JSON.stringify(parsedData);

// Overwrite file and save updated JSON string
fs.writeFileSync('1-json.json', updatedData);