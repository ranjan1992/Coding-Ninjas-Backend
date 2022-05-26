const express = require('express');
const port = 8000;
const path = require('path');
const db = require('./config/mongoose');
const Contact = require('./models/contact');
const app = express();

app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));
app.use(express.json());
app.use(
  express.urlencoded({
    extended: true,
  })
);
app.use(express.static('assets'));

// //middleware 1
// app.use(function (req, res, next) {
//   console.log('Middleware 1 called');
//   next();
// });

// //middleware 2
// app.use(function (req, res, next) {
//   console.log('Middleware 2 called');
//   next();
// });

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
  Contact.find({}, function (err, contacts) {
    if (err) {
      console.log('Error in fetching contacts from the db');
      return;
    }
    return res.render('home', {
      title: 'My Contacts List',
      contact_list: contacts,
    });
  });
});

app.get('/delete-contact', function (req, res) {
  // get the id from query in the ul
  let id = req.query.id;

  //find the contact in the database using the id and delete
  Contact.findByIdAndDelete(id, function (err) {
    if (err) {
      console.log('Error in deleting an Object from database');
      return;
    }
  });
  return res.redirect('back');
});

app.post('/create-contact', function (req, res) {
  Contact.create(
    { name: req.body.name, phone: req.body.phone },
    function (err, newContact) {
      if (err) {
        console.log('error in creating a contact :', err);
        return;
      }

      console.log('*****', newContact);
      return res.redirect('back');
    }
  );
});

app.listen(port, function (err) {
  if (err) {
    console.log('Error in running the server ', err);
  }
  console.log('Yup ! Express Server is running on Port', port);
});
