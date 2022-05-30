const Post = require('../models/post');

module.exports.home = function (req, res) {
  // console.log(req.cookies);
  // res.cookie('codiel', 25);
  // Post.find({}, function (err, posts) {
  //   return res.render('home', {
  //     title: 'Home Page',
  //     posts: posts,
  //   });
  // });

  Post.find({})
    .populate('user')
    .exec(function (err, posts) {
      return res.render('home', { title: 'Codiel|Home', posts: posts });
    });
};
