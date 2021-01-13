const express = require ('express');
const router = express.Router();

//signin page
router.get('/', (req, res) => {
  res.render('landingPage');
})

//signup/signin page
router.get('/signup', (req, res) => {
  res.render('signup');
})
router.get('/signin', (req, res) => {
  res.render('signin');
})

module.exports = router;