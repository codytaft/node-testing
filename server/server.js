const express = require('express');
const app = express();
// const port = 3000;

app.get('/', (req, res) => {
  res.status(404).send({
    error: 'Page not found',
    name: 'Todo App v1.0'
  });
});

app.get('/users', (req, res) => {
  res.status(200).send([
    {
      name: 'Cody Taft',
      age: '32'
    },
    {
      name: 'Jesse',
      age: '33'
    }
  ]);
});

app.listen(3000, () => {
  console.log(`Example app listening on port: 3000!`);
});

module.exports.app = app;

//Run app, then load http://localhost:port in a browser to see the output.
