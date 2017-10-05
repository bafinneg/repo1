const passport = require('passport');
const LocalStrategy = require('passport-local').Strategy;

const init = require('./passport');
const knex = require('../db/connection');

const options = {};

const authHelpers = require('./_helpers');

init();

passport.use(new LocalStrategy(options, (username, password, done) => {
    // check to see if the username exists
    
    knex('users').where({ username }).first()
    .then((user) => {
        // Does the username exist? No, return false
        if (!user) return done(null, false); 
        // Yes? Does the password match?
        if (!authHelpers.comparePass(password, user.password)) { 
            // No? return false
            return done(null, false);
        } else {
            // Yes? return user 
            return done(null, user);
        }
    })
    .catch((err) => { return done(err); });
}));

module.exports = passport;