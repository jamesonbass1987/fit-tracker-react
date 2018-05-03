const mongoose = require('mongoose');
const { Schema } = mongoose;
const crypto = require('crypto');
const jwt = require('jsonwebtoken');
const keys = require('../config/keys')

const userSchema = new Schema({
    username: { type: String, unique: true, required: true },
    email: { type: String, unique: true, required: true },
    passwordHash: String,
    salt: String
});

userSchema.methods.setPassword = function(password){
    this.salt = crypto.randomBytes(16).toString('hex');
    this.passwordHash = crypto.pbkdf2Sync(password, this.salt, 1000, 64, 'sha512').toString('hex');
}

userSchema.methods.verifyPassword = function(password) {
    const hash = crypto.pbkdf2Sync(password, this.salt, 1000, 64, 'sha512').toString('hex');
    return this.passwordHash === hash;
}

userSchema.methods.generateJwt = function() {
    const expiry = new Date();
    expiry.setDate(expiry.getDate() + 7);

    return jwt.sign({
        _id: this._id,
        email: this.email,
        username: this.username,
        exp: parseInt(expiry.getTime() / 1000)
        }, keys.userSecret
    );
}

const User = mongoose.model("User", userSchema);

module.exports = User;