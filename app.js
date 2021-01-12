const express = require('express');
const router = express.Router();
const app = express();
const port = process.env.PORT || 8080;
const mongoose = require('mongoose');
const expressEjsLayout = require('express-ejs-layouts');

mongoose.connect('mongodb://localhost/exp_app',{useNewUrlParser: true, useUnifiedTopology : true})
.then(() => console.log('MongoDB is connected :) !!!'))
.catch((err)=> console.log(err));
const db = mongoose.connection

app.use(express.static('public'));

app.set('view engine', 'ejs');
app.use(expressEjsLayout);

app.use(express.urlencoded({extended : false}));

app.use('/', require('./routes/homepage'));
app.use('/users', require('./routes/user'));

//port
app.listen(port, () => {
  console.log(`App is listening on ${port}`);
})