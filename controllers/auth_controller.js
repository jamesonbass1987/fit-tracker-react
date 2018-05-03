const passport = require('passport');
const mongoose = require('mongoose');
const User = require('../models/user');

module.exports.register = (req, res) => {
        const { email, username, password } = req.body

        const user = new User({ username, email });
        user.setPassword(password);

        user.save(function (err) {
            const token = user.generateJwt();
            res.status(200).send({token});
        });
};

module.exports.login = (req, res) => {
    passport.authenticate('local', (err, user, info) => {

        if (err) {
            res.status(404).send(err);
        }

        if (user) {
            const token = user.generateJwt();
            res.status(200).send({ token });

        } else {
            res.status(401).send(info);
        }

    })(req, res)

};