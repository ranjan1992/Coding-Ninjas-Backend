const express = require('express');
const port = 8000;
const path = require('path');
const app = express();

app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

app.get('/', function (req, res) {
  return res.render('home');
});

app.listen(port, function (err) {
  if (err) {
    console.log('Error in running the server ', err);
  }
  console.log('Yup ! Express Server is running on Port', port);
});

//No more switch cases
