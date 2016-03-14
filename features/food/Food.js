var mongoose = require('mongoose');

var Food = new mongoose.Schema({
	  name: { type: String, required: true, unique: true }
	, price: { type: Number, default: 542 }
	, ingredients: [{
		  type: { type: String, required: true }
		, vegetarian: { type: Boolean, default: false }
	}]
	, genre: { type: String, uppercase: true, trim: true }
	, vegetarian: Boolean
});

module.exports = mongoose.model('Food', Food)