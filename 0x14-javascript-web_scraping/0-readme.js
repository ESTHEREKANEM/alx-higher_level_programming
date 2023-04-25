#!/usr/bin/node
// Reads and prints the content of a file
const fs = require('fs');

fs.readFile(process.argv[2], 'ut8', function (err data {
  if (err) {
    console.log(err)
  } else {
    process.stdout.write(data);
  }
});
