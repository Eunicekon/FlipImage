const express = require('express');
const router = express.Router();
const User = require("../models/user.js");

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
  if(password.length < 6){
    errors.push({msg: 'password is not long enough! Max is 6 characters!'})
  }
  if(errors.length > 0){
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
          password: password,
        });
        //line 46-50 : Generate a salt, hash the user’s password. Assign this encrypted value to the user’s password and then save the client to the database.
          bcrypt.genSalt(10,(err,salt) =>
          bcrypt.hash(newUser.password,salt,
            (err,hash) => {
            if(err) throw err;
            newUser.password = hash;
            newUser.save()
            .then((value) => {
              console.log(value)
              res.redirect('/user/login');
            })
            .catch(value => console.log(value));
        }));
      }
    })
  }
})
router.post('/signin', (req, res, next) => {
})

router.get('/logout', (req, res) => {
})

module.exports = router;