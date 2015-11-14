var mongoose = require('mongoose');

var urlString = 
process.env.LOCAPP || 
process.env.MONGOLAB_URI ||
process.env.MONGOHQ_URL ||
'mongodb://localhost/locApp'


mongoose.connect(urlString, function (err, res) {
	if (err)
		console.log('ERROR connecting to: ' + urlString + '. ' + err)
	else
		console.log('Succeeded connecting to: ' + urlString)
}) 