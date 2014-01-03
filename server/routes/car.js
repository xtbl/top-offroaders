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

exports.findById = function (req, res) {
	console.log(req.params);
	var id = parseInt(req.params.id);
	console.log('findById: ' + id);
	db.collection('cars', function (err, collection) {
		collection.findOne({'id': id}, function (err, item) {
			console.log(item);
			res.jsonp(item);
		});
	});
}

/*======================================================================================*/
// Populate database with sample data if empty.

var populateDB = function (argument) {
	console.log("Populating cars database...");

	var cars = [
		{"id":12, "name": "Jeep Wrangler Rubicon", "price": 22045, "image": "12-rubicon.jpg", "description": "The Rubicon is like a mountain goat. It might take a while to get there, but it is perfectly capable of crawling over just about anything."},
		{"id":11, "name": "Jeep Grand Cherokee Limited", "price": 27490, "image": "11-cherokee.jpg",  "description": "Wrangler too mediocre on road for you? Too hard-core? Too compromised as a car? The Grand Cherokee is a killer, full-sized off-road SUV. Just don't drive around in it without some mud on the sides."},
		{"id":10, "name": "Porsche Cayenne", "price": 48200, "image": "10-cayenne.jpg",  "description": "It may be widely regarded as heresy, but we say it's not. The Cayenne is a race winner. It may not be the types of races the Porsche is best known for, but anything that wins the Transsyberia Rally is awesome in our book."},
		{"id":9, "name": "Mercedes-Benz G-Class", "price": 107100, "image": "09-gwagen.jpg", "description": "Let's face it. The G-Wagen is just bad-ass. The new Land Rover Defender might end up being a chic little mall hopper. But the G-Wagen still looks like it will kick you in the balls and make fun of you for blinking when it happens."},
		{"id":8, "name": "Land Rover LR4", "price": 49750,  "image": "08-lr4.jpg", "description": "The LR4 isn't quite a Range Rover, but it can still keep going over just about any terrain."},
		{"id":7, "name": "Toyota Tacoma TRD", "price": 16865,  "image": "07-tacoma.jpg", "description": "The Tacoma is already a killer truck. The TRD version makes it a killer off-roader as well. We can't wait to drive the TX Baja version."},
		{"id":6, "name": "Ford F-150 SVT Raptor", "price": 43565,  "image": "06-svt.jpg", "description": "If your idea of off-roading involves more racing across the Arizona countryside than crawling over boulders, there's no vehicle you want more than this one."},
		{"id":5, "name": "Toyota Land Cruiser", "price": 68920,  "image": "05-cruiser.jpg", "description": "This thing is a legend in some of the toughest areas of the world. Places like the jungles of South America and the Australian Outback that don't just kill trucks, but have a very limited supply of spare parts."},
		{"id":4, "name": "Land Rover Range Rover Sport", "price": 60895,  "image": "04-roversport.jpg", "description": "Land Rover's off-road course is used by other manufacturers to see if their own trucks and SUVs have what it takes. They know what they're doing. The Range Rover Sport is the obvious choice for a reason."},
		{"id":3, "name": "Toyota FJ Cruiser 4x4", "price": 27170,  "image": "03-fj.jpg", "description": "It looks like nothing else on the road. And with the TRD package, it is capable of some serious ass hauling on just about any surface."},
		{"id":2, "name": "Jeep Wrangler Unlimited", "price": 24545,  "image": "02-wrangler.jpg", "description": "The Jeep Wrangler is the classic off-road vehicle. It has everything from real performance to image to military history. To top it all off, there's immense aftermarket support. You can kit out your Wrangler however the hell you want."},
		{"id":1, "name": "Custom Built Tube Frame Off-Roader", "price": "?",  "image": "01-tube.jpg", "description": "The Best off-roader is certainly the one you and your buddies weld together in the garage. That applies only if you know what you're doing. If you don't, this is probably the worst off-roader. Consider paying an expert."}
	];

	db.collection('cars', function (err, collection) {
		collection.insert(cars, {strict: true}, function (err, result) {});
	});

};