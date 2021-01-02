const express = require('express');
const router = express.Router();
const app = express();
const port = process.env.PORT || 8080;
const mongoose = require('mongoose');
const expressEjsLayout = require('express-ejs-layouts');

//creating mongoose connection and setting up for database work
// mongoose.connect('mongodb://localhost/FlipImage', {useNewUrlParser: true});
// const db = mongoose.connection;
// db.on('error', console.error.bind(console, 'connection error:'));
// db.once('open', function() {
//   console.log('we are connected!');
// });

//EJS 
app.set('view engine', 'ejs');
app.use(expressEjsLayout);

//BodyParser
app.use(express.urlencoded({extended : false}));

//Routes
app.use('/', require('./routes/homepage'));
app.use('/users', require('./routes/users'));

//port
app.listen(port, () => {
  console.log(`App is listening on ${port}`);
})