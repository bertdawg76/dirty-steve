

//Initialize Express
var express = require('express');
var app = express();


var cors = require('cors');
var bodyParser = require('body-parser');


app.set('port', process.env.PORT || 8400);






app.use(cors());

app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser());
app.use(express.static(__dirname + '/public'));








app.listen(app.get('port'), function(err){
  if (err) throw err;
  console.log('server is running on port: ' + app.get('port'));
});