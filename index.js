const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const bodyParser = require('body-parser');
const keys = require('./config/keys');
const passport = require('passport');

const apiRoutes = require('./routes/apiRoutes');

const app = express();

mongoose.connect(keys.mongoURI);
mongoose.connection.once('open', () => {
    console.log('Connected to database');
});

// [SH] Bring in the Passport config after model is defined
require('./services/passport');

app.use(bodyParser.json());

app.use(cors());

app.use(passport.initialize());

app.use('/api', apiRoutes);

const PORT = process.env.PORT || 4000;

app.listen(4000, () => {
    console.log('Server is listening for requests on port 4000');
});
