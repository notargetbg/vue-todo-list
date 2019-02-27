const express = require('express');
const bodyParser = require('body-parser');
const todosRouter = require('./core/routes/todos.js');

const app = express();
const port = process.env.PORT || 5000;

const basePath = '/api';

// console.log that your server is up and running
app.listen(port, () => console.log(`Listening on port ${port}`));

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({extended: false}));

// parse application/json
app.use(bodyParser.json());

// Add headers
app.use(function (req, res, next) {
	// Website you wish to allow to connect
	res.setHeader('Access-Control-Allow-Origin', 'http://localhost:8080');
	res.setHeader('Access-Control-Allow-Methods', 'GET,HEAD,PUT,POST,DELETE,PATCH,OPTIONS');
	res.setHeader('Access-Control-Allow-Credentials', 'true');
	res.setHeader('Access-Control-Allow-Headers', 'Access-Control-Allow-Headers, Origin, Content-Type, Accept, Authorization');
	
	next();
});

app.use(`${basePath}/todos`, todosRouter);

app.use(function (err, req, res) {
	console.error('error:' ,err.stack);
	res.status(500).send({
		message: 'Something broke!',
		error: err
	});
});