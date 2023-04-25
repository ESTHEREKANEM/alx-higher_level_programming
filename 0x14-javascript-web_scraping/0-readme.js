#!/usr/bin/node

const fs = require('fs');

fs.readFile(filePath, 'utf8', (err, data) => {
  if (err) {
    console.error(err);
	  return;
  }
	  console.log(data);
});
