const { Client } = require('pg');

const localConf = {
	host: 'localhost',
	user: 'postgres',
	password: 'root',
	database: 'todos',
	max: 20,
	idleTimeoutMillis: 30000,
	connectionTimeoutMillis: 2000,
};

const prodConf = {
	connectionString: process.env.DATABASE_URL,
	ssl: true,
};

const config = process.env.NODE_ENV === 'production' ? prodConf : localConf;

const db = new Client(config);
db.connect();

module.exports = {
	query: (text, params, callback) => {
		return db.query(text, params, callback);
	}
};