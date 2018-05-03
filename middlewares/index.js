const jwt = require('express-jwt');
const keys = require('../config/keys');

module.exports = {
    auth = jwt({
        secret: keys.userSecret,
        userProperty: 'payload'
    })
}