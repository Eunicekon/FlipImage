const { render } = require('ejs');
const express = require('express');
const router = express.Router();
const User = require("../models/users.js");

// GET REQUEST: sign in handle
router.get('/signin', (req, res) => {
  res.render('signin');
})
router.get('/signup', (req, res) => {
  res.render('signup');
})

//POST REQUEST: sign up handle
router.post('/signup', (req, res) => {
  const {name, username, email, password} = req.body;
  let errors = [];
  console.log('Name ' + name + ' ' + 'Username ' + username + ' ' + 'Email: ' + email + ' ' + 'Password ' + password);
  if(!name || !username || !email || !password){
    errors.push({msg: "Please fill in all the available fields"})
  }
  if(password.lenght < 6){
    errors.push({msg: 'password is not long enough! Max is 6 characters!'})
  }
  if(errors.lenght > 0){
    res.render('signup', {
      errors: errors,
      name: name,
      username: username,
      email: email,
      password: password
    })
  } else {
    User.findOne({email : email}).exec((err,user) => {
      console.log(user);
      if (user) {
        errors.push({msg: 'email already exists!'});
        render(res,errors,name,username,email,password);
      } else {
        const newUser = new User({
          name: name,
          username: username,
          email: email,
          passowrd: password
        });
      }
    })
  }
})
router.post('/signin', (req, res, next) => {
})

//log out handle
router.get('/logout', (req, res) => {
})

module.exports = router;