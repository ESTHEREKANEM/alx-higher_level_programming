#!/usr/bin/node

const request = require('request');
const url = 'https://swapi-api.alx-tools.com/api/films/' + process.argv[2];
request(url)
  .then(response => {
    const characters = JSON.parse(response.body).characters;
    return Promise.all(characters.map(character => request(character)));
  })
  .then(responses => {
    responses.forEach(response => {
      console.log(JSON.parse(response.body).name);
    });
  })
  .catch(error => {
    console.error(error);
  });

