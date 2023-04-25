#!/usr/bin/node

const request = require('request');
let url = 'https://swapi-api.alx-tools.com/api/films/';

while (true) {
  let filmId = process.argv[2] || prompt('Enter a film ID:');
  url += filmId;

  request(url, function (error, response, body) {
    if (error) {
      console.log('Error:', error);
      return;
    }

    try {
      const title = JSON.parse(body).title;
      console.log(`Title: ${title}`);
    } catch (e) {
      console.log(`Invalid film ID: ${filmId}`);
    }
  });

  url = 'https://swapi-api.alx-tools.com/api/films/';
}

