'user strict';
const mysql = require('mysql');
const util = require('util');
const config = require('config');

let pool = mysql.createPool({
	host: config.get('db.host'),
	user: config.get('db.username'),
	password: config.get('db.password'),
	database: config.get('db.database'),
	multipleStatements: true,
});
pool.query = util.promisify(pool.query);
pool.getConnection = util.promisify(pool.getConnection);

// To get transaction connection
pool.getTransactionConnection = async () => {
	try {
		const connection = await pool.getConnection();
		connection.beginTransaction = await util.promisify(connection.beginTransaction);
		await connection.beginTransaction();
		connection.query = await util.promisify(connection.query);
		return connection;
	} catch (error) {
		throw error;
	}
};

module.exports = pool;
