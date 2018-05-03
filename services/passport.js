const passport = require('passport');
const LocalStrategy = require('passport-local').Strategy;
const mongoose = require('mongoose');
const User = require('../models/user');

passport.use(new LocalStrategy({},
    function(username, password, done) {
        console.log('from strategy')
        User.findOne({ username: username }, function (err, user) {
            if (err) { return done(err); }
            if (!user) { return done(null, false); }
            if (!user.verifyPassword(password)) { return done(null, false); }
            done(null, user);
        });
    }
));