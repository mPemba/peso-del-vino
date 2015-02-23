var User = require('./../models/userModel');
var mongoose = require('mongoose');

module.exports = {
	create: function(req, res) {
		var newUser = new User(req.body);
		newUser.user = req.user._id;
		newUser.save(function(err, userOnline) {
			if (err) {
				return res.status(500).end();
			}
			return res.json(userOnline);
		})
	}, 
	get: function(req, res) {
		User.find({}).exec().then(function(userOnline) {
			console.log(userOnline);
			res.status(200).json(userOnline);
		})
	}
}