const config = require("../config/db.config");
const { Pool } = require("pg");

const db = new Pool({
	user: config.user,
	host: config.host,
	database: config.database,
	password: config.password,
	port: config.port
});

module.exports = db;
