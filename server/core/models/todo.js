const db = require('../../db');

function getAll() {
	return db.query('SELECT * FROM todos');
}

function create(...args) {
	return db.query('INSERT INTO todos(title, "isDone") VALUES($1, $2) RETURNING *', args);
}

function update(...args) {
	return db.query(`
	UPDATE todos SET 
		title = COALESCE($1, title), 
		"isDone" = COALESCE($2, "isDone")
	WHERE id = $3 RETURNING *
	`, args);
}

function deleteOne(id) {
	return db.query('DELETE FROM todos WHERE id = $1 RETURNING id', [
		id,
	]);
}

module.exports = {
	getAll,
	create,
	update,
	deleteOne
};