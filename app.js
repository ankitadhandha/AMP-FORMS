//including express module
var express = require('express');

//creating express object
var app = express();

//setting port
var PORT = 8080;

//this is to access form data
var bodyParser = require('body-parser');
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use(express.static(__dirname + '/views'));

var multer = require('multer');
var multipart = multer();

app.get("/", function(req, res) {

	res.render(index);

});

app.post('/components/amp-form/submit-form-input-text-xhr', multipart.fields([]), function(req, res) {

	//Enables CORS
	res.setHeader('AMP-Access-Control-Allow-Source-Origin', 'http://'+req.get('host'));

	//responding with form data
	res.json({"name":req.body.name, "email": req.body.email});
	
});

var port = process.env.PORT || PORT;
var server = app.listen(port, function() {

    console.log('Express Started on http://localhost:' + port + '');
});

module.exports = app;