if (error === null) {
  let characters = JSON.parse(body).characters;
  printCharacters(characters, 0);
}
