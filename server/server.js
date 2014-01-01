var express = require('express');
	path = require('path');
	cars = require('./routes/car');

var app = express();
app.use(express.bodyParser());
app.use(express.static(path.join(__dirname, '../client')));

app.get('/cars', cars.findAll);
//app.get('/cars/:id', cars.findById);

app.listen(3000);
console.log('Listening on port 3000...');