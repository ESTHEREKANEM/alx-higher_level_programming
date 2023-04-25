#!/usr/bin/node

const request = require('request');
const starWarsUri = process.argv[2];
let times = 0;
let i = 0;

request(starWarsUri, function (_err, _res, body) {
  body = JSON.parse(body).results;

  while (i < body.length) {
    const characters = body[i].characters;
    let j = 0;

    while (j < characters.length) {
      const character = characters[j];
      const characterId = character.split('/')[5];

      if (characterId === '18') {
        times += 1;
      }

      j++;
    }

    i++;
  }

  console.log(times);
});
