const mongoose = require('mongoose');

// Connect to mongo database
mongoose.connect('mongodb://localhost:27017/ToDo_App');

// Get connection
const db = mongoose.connection;

// Check error if fails
db.on('error', console.error.bind(console, 'Error connecting to MongoDB'));

// successfully connect db
db.once('open', function () {
  console.log('Connected to database: MongoDB');
});

// export db
module.exports = db;
