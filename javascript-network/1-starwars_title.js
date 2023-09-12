const request = require('request');
const args = process.argv.slice(2)
// slice(2) === [2:] in python

request('https://swapi-api.alx-tools.com/api/films/'+args[0], (error, response, body)=> {
    console.log(body['title']);
});
