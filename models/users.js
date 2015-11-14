var mongoose = require('mongoose');
var location = mongoose.model('Location');

var userSchema = new mongoose.Schema({
	locations: [location]
});

mongoose.model('User', userSchema);