var express = require('express');
var router = express.Router();
var mongoose = require('mongoose')
var User = mongoose.model('User')

/* GET users listing. */
router.route('/')
	.get(function (req, res, next){
		User.find({}, function (err, users ){
			if (err) {
				console.error(err)
				res.json(err)
			} else {
				res.json(users)
			}
		})
	})
	.post(function (req, res, next){
		var locations = []
		User.create({
			locations: []
		}, function (err, user){
			if (err) {
				console.log(err)
				res.json(err)
			} else {
				console.log(user)
				res.json(user)
			}

		});
	})

module.exports = router;
