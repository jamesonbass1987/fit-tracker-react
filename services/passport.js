const passport = require('passport');
const LocalStrategy = require('passport-local').Strategy;
const mongoose = require('mongoose');
const User = require('../models/user');

passport.use(new LocalStrategy({}, (username, password, done) => {
    User.findOne({ email: username }, function (err, user) {
        if (err) { return done(err); }
        // Return if user not found in database
        if (!user) {
            return done(null, false, {
                message: 'User not found'
            });
        }
        // Return if password is wrong
        if (!user.validPassword(password)) {
            return done(null, false, {
                message: 'Password is wrong'
            });
        }
        // If credentials are correct, return the user object
        return done(null, user);
        });
    }
));