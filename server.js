'use strict';


console.log('sup');
const express = require('express');
const app = express();

app.use(express.static('./public'));

// frontend on 8080
// backend on 3000
// postgres on 5432

const PORT = 3000;

let visits = 0;

app.get('/text', (request, response) => {
  visits++;
  const message = `congrats you are the ${visits} visitor`;
  response.send(message);
});

app.get('/student', (request, response) => {
  const studentJSON = {
    name: 'chris'
  };
  response.send(studentJSON);
});

app.use('*', (request, response) => {
  response.send('that didn\'t work');
});

app.listen(PORT, () => console.log(`I'm a happy server running on PORT ${PORT}`));
