const express = require('express');
const port = 8000;
const path = require('path');
const app = express();

app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));
app.use(express.json());
app.use(
  express.urlencoded({
    extended: true,
  })
);

//middleware 1
app.use(function (req, res, next) {
  console.log('Middleware 1 called');
  next();
});

//middleware 2
app.use(function (req, res, next) {
  console.log('Middleware 2 called');
  next();
});

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

app.get('/practise', function (req, res) {
  return res.send('<h1>This is a Practise session</h1>');
});

app.post('/create-contact', function (req, res) {
  contactList.push(req.body);
  return res.redirect('/');
});
app.listen(port, function (err) {
  if (err) {
    console.log('Error in running the server ', err);
  }
  console.log('Yup ! Express Server is running on Port', port);
});
