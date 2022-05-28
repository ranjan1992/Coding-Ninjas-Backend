module.exports.profile = function (req, res) {
  return res.render('user_profile', { title: 'User Profile' });
};

module.exports.signUp = function (req, res) {
  return res.render('user_sign_up', { title: 'Codiel | Sign Up' });
};

module.exports.signIn = function (req, res) {
  return res.render('user_sign_in', {
    title: 'Codiel | SignIn',
  });
};

module.exports.create = function (req, res) {
  //To Do
};

module.exports.createSession = function (req, res) {
  //TO DO later
};
