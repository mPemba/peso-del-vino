var express = require('express');

var port = 8666;
var app = express();

app.use(express.static(__dirname + '/public'));



app.listen(port, function() {
	console.log('listening on port ' + port);
})