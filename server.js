var   express = require('express')
	, bodyParser = require('body-parser')
	, cors = require('cors')
	, mongoose = require('mongoose')
	, app = express()
	, port = 8090
	, mongoUri = 'mongodb://localhost:27017/menu';

app.use(bodyParser.json());
app.use(cors());

mongoose.connect(mongoUri);
mongoose.connection.once('open', function() {
	console.log('Connected to mongo at ' + mongoUri);
});

require('./features/food/foodRoutes')(app);

app.listen(port, function() {
	console.log('listening on ' + port);
});