var express = require('express');
var session = require('express-session');
var passport = require('passport');
var localStrategy = require('passport-local').Strategy;
var bodyParser = require('body-parser');
var mongoose = require('mongoose');

var port = 8666;
var app = express();

app.use(express.static(__dirname + '/public'));
var User = require('./api/models/userModel');
var userCtrl = require('./api/controllers/userCtrl');
var profileCtrl = require('./api/controllers/profileCtrl.js');

// var isAuthed = function(req, res, next) {
//     if(req.session.logged_in === true) {
//         return next();
//     }
//     else {
//         return res.redirect('/auth');
//     }
// }

app.use(bodyParser.json());
app.use(session({
	secret: '6661111YO∆LA∆TENGO∆is∆super∆rad1111666'
}));

app.use(passport.initialize());
app.use(passport.session());

mongoose.connect('mongodb://localhost/pesoDelVino');

passport.use(new localStrategy({
	usernameField: 'email',
	passwordField: 'password'
}, function(username, password, done) {
	User.findOne({email: username}).exec().then(function(user) {
		if (!user) {
			return done(null, false);
		}
		user.comparePassword(password).then(function(isMatch) {
			if (!isMatch) {
				return done(null, false);
			}
			return done(null, user);
		})
	})
}))
// passport.use(auth.strategy);
passport.serializeUser(function(user, done) {
	done(null, user);
})
passport.deserializeUser(function(obj, done) {
	done(null, obj);
})

app.post('/api/auth', passport.authenticate('local'), function(req, res) {
	return res.status(200).redirect('/#/home');
})

app.post('/api/register', function(req, res) {
	var newUser = new User(req.body);
	newUser.save(function(err, user) {
		if (err) {
			return res.status(500).end();
		}
		passport.authenticate('local')(req, res, function() {
			res.redirect('/#/home')
		})
		// return res.json(user);
	})
})

var isAuthed = function(req, res, next) {
	if (!req.isAuthenticated()) {
		return res.status(403).end();
	}
	return next();
}

app.get('/api/logout', function(req, res) {
	req.logout();
	res.status(200).end();
	// res.redirect('/auth');
})
app.get('/api/profile', isAuthed, profileCtrl.profile);
app.get('/api/user', isAuthed, userCtrl.get);


app.listen(port, function() {
	console.log('listening on port ' + port);
})