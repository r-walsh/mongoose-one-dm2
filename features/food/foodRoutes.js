var ctrl = require('./foodCtrl');

module.exports = function( app ) {
	app.route('/api/food')
		.post(ctrl.addFood)
		.get(ctrl.getFood)
	app.route('/api/one-food')
		.get(ctrl.getOneFood)
	app.route('/api/veggie')
		.get(ctrl.getVeggie)
}