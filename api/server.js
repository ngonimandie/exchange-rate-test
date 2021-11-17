const express = require('express');
const bodyParser = require('body-parser');
var cors = require('cors');

// create express app
const app = express();

// Setup server port
const port = process.env.PORT || 5000;
app.use(cors());
// parse requests of content-type - application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: true }))

// parse requests of content-type - application/json
app.use(bodyParser.json())

// define a root route
app.get('/', (req, res) => {
  res.send("Welcome to Rate Converter by Ngonidzashe Manditsvanga API");
});

// Require rate routes
const rateRoutes = require('./src/routes/rate.routes')

// using as middleware
app.use('/api/v1/rates', rateRoutes)

// listen for requests
app.listen(port, () => {
  console.log(`Server is listening on port ${port}`);
});