const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const bodyParser = require('body-parser');
const keys = require('./config/keys');
const passport = require('passport');

const app = express();
mongoose.connect(keys.mongoURI);

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cors());

app.use(passport.initialize());

app.get('/', (req,res) => {
    res.send({hello: 'there'})
})

const PORT = process.env.PORT || 4000;

app.listen(4000);
