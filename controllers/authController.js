const passport = require('passport');
const mongoose = require('mongoose');

exports.login = passport.authenticate('local',{
    successRedirect: '/admin',
    failureRedirect: '/login',
    failureMessage: 'Invalid Login',
})

exports.isLoggedIn = (req, res, next) => {
    //if success
    if(req.isAuthenticated()){
        next();
        return;
    }
    //if failed
    res.redirect('/login');
}