const express = require('express');
const router = express.Router();

// GET REQUEST: sign in handle
router.get('/signin', (req, res) => {
  res.render('signin');
})
router.get('/signup', (req, res) => {
  res.render('signup');
})

//POST REQUEST: sign up handle
router.post('/signup', (req, res) => {
})
router.post('/signin', (req, res, next) => {
})

//log out handle
router.get('/logout', (req, res) => {
})

module.exports = router;