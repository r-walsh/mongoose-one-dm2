var Drinks = require('./Drinks');

module.exports = {
	getDrinks: function( req, res ) {
		Drinks.find({}, function( err, drinks ) {
			if (err) {
				return res.status(500).send(err);
			}
			
			res.send(drinks);
			
		});
	}
	, getOneDrink: function( req, res ) {
		Drinks.findById(req.query.id, function( err, drink ) {
			if (err) {
				return res.status(500).send(err);
			}
			
			res.send(drinks);
			
		});
	}

	, postDrink: function( req, res ) {
		new Drinks(req.body).save(function( err, drink ) {
			if (err) {
				return res.status(500).send(err);
			}
			
			res.send(drink);
			
		});
	}
}