var Food = require('./Food');

module.exports = {
	addFood: function( req, res ) {
		new Food(req.body).save(function( err, food ) {
			if (err) {
				return res.status(500).send(err);
			}
			
			res.send(food);
			
		});
	}
	, getFood: function( req, res ) {
		Food.find({}, function( err, food ) {
			if (err) {
				return res.status(500).send(err);
			}
			
			res.send(food);
			
		});
	}
	, getOneFood: function( req, res ) {
		Food.findById(req.query.id, function( err, food ) {
			if (err) {
				return res.status(500).send(err);
			}
			
			res.send(food);
			
		});
	}
	, getVeggie: function( req, res ) {
		Food.find({})
			.where('vegetarian').equals(true)
			.limit(2)
			.sort('name')
			.exec()
			.then(function( food, err ) {
				if (err) {
					return res.status(500).send(err);
				}
				
				res.send(food);
				
			});
	}
	, deleteFood: function( req, res ) {
		Food.findByIdAndRemove(req.query.id, function( err, food ) {
			//
		});
	}
	, updateFood: function( req, res ) {
		Food.findByIdAndUpdate(req.query.id, { price: req.body }, function( err, food ) {
			//
		});
	}
	, updatePrice: function( req, res ) {
		Food.find({})
			.set(req.body.property, req.body.changed)
			.save(function( err, food ) {
				if (err) {
					return res.status(500).send(err);
				}
				
				res.send(food);
				
			});
	}
	, findOneVeggie: function( req, res ) {
		Food.findOne({ vegetarian: true }, function( err, food ) {
			if (err) {
				return res.status(500).send(err);
			}
			
			res.send(food);
			
		});
	}
}