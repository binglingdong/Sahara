var express = require('express');
var router = express.Router();
var sql = require('../../database/mysqlLib');
var passport = require('passport/lib');

router.get('/', function(req, res, next) {
    var messages = req.flash('error');
    res.render('user/signin', { title : "Sign In Page", messages: messages, errors: messages.length > 0 });
});

router.post('/', passport.authenticate('local.signin', {
    failureRedirect: 'signin',
    failureFlash: true
}), function (req, res, next) {
        res.redirect('/');
});

module.exports = router;