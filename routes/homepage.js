const express = require ('express');
const router = express.Router();

//signin page
router.get('/', (req, res) => {
  res.render('homepage');
})

//signup page
router.get('/signup', (req, res) => {
  res.render('signup');
})

module.exports = router;