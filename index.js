// Add express
const express = require('express');
const app = express();
const port = 8000;

// Declare express layouts
const expressLayouts = require('express-ejs-layouts');

// Import db connection
const db = require('./config/mongoose');

// use for query params
app.use(express.urlencoded());

// use static files
app.use(express.static('./assets'));

// use layouts
app.use(expressLayouts);
app.set('layout extractStyles', true);
app.set('layout extractScripts', true);

// use router module
app.use('/', require('./routes'));

//set view engine
app.set('view engine', 'ejs');
app.set('views', './views');

// Running server
app.listen(port, function (err) {
  if (err) {
    console.log(`Error on listening the server: ${err}`);
  }

  console.log(`Server is listening on port: ${port}`);
});
