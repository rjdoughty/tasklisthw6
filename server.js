// Dependencies
// ===========================================================
const express = require('express');
const path = require('path');

const app = express();
const PORT = 8080;

// Sets up the Express app to handle data parsing
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use(express.static(path.join(__dirname, 'public')));

// Import our routes and pass it 'app' as an argument
require('./routes/routes.js')(app);


// Listener
// ===========================================================
app.listen(PORT, function() {
    console.log(`App listening on PORT ${PORT}`);
  });