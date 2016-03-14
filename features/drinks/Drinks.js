var mongoose = require('mongoose');

var Drinks = new mongoose.Schema({
	  name: { type: String, required: true }
	, price: { type: Number, required: true }
	, description: { type: String, default: 'Delicious' }
	, ingredients: [{
		  name: { type: String, required: true }
		, abv: Number
	}]
});

module.exports = mongoose.model('Drinks', Drinks)