const passport = require('passport');
const googleStrategy = require('passport-google-oauth').OAuth2Strategy;

const crypto = require('crypto');

const User = require('../models/user');

passport.use(
  new googleStrategy(
    {
      clientID:
        '502281796308-l8ke9r2e8qdn6c95jvbcod62f72cf3q3.apps.googleusercontent.com',
      clientSecret: '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',
      callbackURL: 'http://localhost/users/auth/google/callback',
    },
    function (accessToken, refreshToken, profile, done) {
      // find a user
      User.findOne({ email: profile.emails[0].value }).exec(function (
        err,
        user
      ) {
        if (err) {
          console.log('Error in google strategy-passport', err);
          return;
        }
        console.log(profile);

        if (user) {
          //if done , set this user as req.user
          return done(null, user);
        } else {
          //if not found , create the user and set it as req.user
          User.create(
            {
              name: profile.displayName,
              email: profile.emails[0].value,
              password: crypto.randomBytes(20).toString('hex'),
            },
            function (err, user) {
              if (err) {
                console.log(
                  'Error in creating the google strategy-passport',
                  err
                );
                return;
              }
              return done(null, user);
            }
          );
        }
      });
    }
  )
);

module.exports = passport;
