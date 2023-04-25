#!/usr/bin/node

const request = require('request');

request(process.argv[2], function (err, _res, body) {
  const completedTasksByUsers = {};

  err ? console.log(err) : body = JSON.parse(body);

  body.forEach(function (task) {
    const userId = task.userId;
    const completed = task.completed;
    completedTasksByUsers[userId] = (completedTasksByUsers[userId] || 0) + Number(completed);
  });

  console.log(completedTasksByUsers);
});
