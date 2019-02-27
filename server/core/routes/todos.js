const express = require('express');
const router = express.Router();
const todo = require('../models/todo.js');

router.get('/', (req, res, next) => {
	todo.getAll()
		.then(result => {
			res.status(200).send({
				todos: result.rows
			});
		})
		.catch(err => next(err));
});

router.post('/', (req, res, next) => {
	if (!req.body.isDone) {
		return res.status(400).send({ message: 'Input data missing.' });
	}
	todo.create(
		req.body.title,
		req.body.isDone
	)
		.then(result => {
			res.status(200).send({ 
				message: 'OK.',
				todo: result.rows[0]
			});
		})
		.catch(err => {
			next(err);
		});
});

router.put('/:id', (req, res, next) => {
	if (!req.body.title && !req.body.isDone) {
		return res.status(400).send({ message: 'Input data missing.' });
	}

	todo.update(
		req.body.title,
		req.body.isDone,
		req.params.id
	)
		.then(result => {
			if(result.rowCount === 0) {
				res.status(400).send({ message: 'Nothing is updated.' });
			} else {
				res.status(200).send({ 
					message: 'OK.',
					todo: result.rows[0]
				});
			}
		})
		.catch(err => next(err));
});

router.delete('/:id', (req, res ,next) => {
	todo.deleteOne(
		req.params.id,
	)
		.then(result => {
			if(result.rowCount === 0) {
				res.status(400).send({ message: 'Nothing is deleted.' });
			} else {
				res.status(200).send({ 
					message: 'OK.',
					...result.rows[0]
				});
			}
		})
		.catch(err => next(err));
});

module.exports = router;