var express = require('express');
var session = require('express-session');
var passport = require('passport');
var localStrategy = require('passport-local').Strategy;
var bodyParser = require('body-parser');
var mongoose = require('mongoose');

var port = 8666;
var app = express();

var user = require('/api/models/user');
var userCtrl = require('/api/controllers/userCtrl');
// var profileCtrl = require('/api/controllers/profileCtrl.js');

mongoose.connect('mongodb://localhost');

passport.use(new localStrategy({
	usernameField: 'email',
	passwordField: 'password'
}, function(username, password, done) {
	user.findOne({email: username}).exec().then(function(user) {
		if (!user) {
			return done(null, false);
			alert('who are you?');
		}
		user.comparePassword(password).then(function(isMatch) {
			if (!isMatch) {
				return done(null, false);
				alert('wrong. bro.');
			}
			return done(null, user);
		})
	})
}))
passport.serializeUser(function(user, done) {
	done(null, user);
})
passport.deserializeUser(function(obj, done) {
	done(null, obj);
})

app.use(express.static(__dirname + '/public'));
app.use(bodyParser.json());
app.use(session({
	secret: '6661111YO∆LA∆TENGO∆is∆super∆rad1111666'
}));
app.use(passport.initialize());
app.use(passport.session());

app.post('/api/auth', passport.authenticate('local'), function(req, res) {
	return res.status(200).end();
})
app.post('/api/register', function(req, res) {
	var newUser = new user(req.body);
	newUser.save(function(err, user) {
		if (err) {
			return res.status(500).end();
		}
		return res.json(user);
	})
})
var isAuthed = function(req, res, next) {
	if (!req.isAuthenticated()) {
		return res.status(403).end();
	}
}

app.get('/api/profile', isAuthed, userCtrl.profile);

app.listen(port, function() {
	console.log('listening on port ' + port);
})