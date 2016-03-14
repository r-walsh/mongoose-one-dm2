var ctrl = require('./drinkCtrl');

module.exports = function( app ) {
	app.route('/api/drinks')
		.get
		.post
	app.route('/api/one-drink')
		.get
		.put
		.delete
}