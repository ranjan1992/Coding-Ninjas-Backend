const express = require('express');
const port = 8000;
const path = require('path');
const app = express();

app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

var contactList = [
  {
    name: 'Arpan',
    phone: '1111111111',
  },
  {
    name: 'Tony Stark',
    phone: '1233441414',
  },
  {
    name: 'Vipshika',
    phone: '1232423524',
  },
];
app.get('/', function (req, res) {
  return res.render('home', {
    title: 'My Contacts List',
    contact_list: contactList,
  });
});

app.listen(port, function (err) {
  if (err) {
    console.log('Error in running the server ', err);
  }
  console.log('Yup ! Express Server is running on Port', port);
});

//No more switch cases
