module.exports = {
	profile: function(req, res) {
		return res.json(req.user);
	}
};
