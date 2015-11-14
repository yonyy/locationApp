var mongoose = require('mongoose');
var locationSchema = new mongoose.Schema({
	latitude: Number,
	longitude: Number,
	time: Date
});

mongoose.model('Location', locationSchema);       