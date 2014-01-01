var MongoClient = require('mongodb').MongoClient,
	Server = require('mongodb').Server,
	db;

var MongoClient = new MongoClient(new Server('localhost', 27017));
MongoClient.open(function(err, MongoClient){
	db = MongoClient.db("top-offroaders-db");
	db.collection('cars', {strict: true}, function(err, collection){
		if (err) {
			console.log("The 'cars' collection doesn't exist. Creating...");
			populateDB();
		}
	});
});

exports.findAll = function (req, res) {
	var name = req.query["name"];
	db.collection('cars', function (err, collection) {
		collection.find().toArray(function (err, items) {
			res.jsonp(items);
		});
	});
};

/*======================================================================================*/
// Populate database with sample data if empty.

var populateDB = function (argument) {
	console.log("Populating cars database...");

	var cars = [
		{"id":1, "name": "1____", "price": 10, "description": "____"},
		{"id":2, "name": "2____", "price": 10, "description": "____"},
		{"id":3, "name": "3____", "price": 10, "description": "____"}
	];

	db.collection('cars', function (err, collection) {
		collection.insert(cars, {strict: true}, function (err, result) {});
	});

};