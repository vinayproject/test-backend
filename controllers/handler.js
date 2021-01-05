'use strict';
const dbcon = require('./../utils/db');
const QUERIES = require('./sql');
const httpUtil = require('./../utils/HttpUtil');

exports.edit = async (req, res, next) => {
	try {
		let reqData = req.body;
		await dbcon.query(QUERIES.UPDATE_DATA, [
			reqData.question,
			JSON.stringify(reqData.options),
			reqData.answer,
			req.params.id,
		]);
		let insertedData = await dbcon.query(QUERIES.GET_EDITED_DATA, req.params.id);
		res.json(httpUtil.getSuccess(insertedData[0], 'edited'));
	} catch (error) {
		console.log(error, 'from error');
		res.json(httpUtil.getException('Sign Up Error', null, error));
	}
};

exports.Save = async (req, res, next) => {
	try {
		let data = {
			options: JSON.stringify(req.body.options),
			question: req.body.question,
			answer: req.body.answer,
		};
		await dbcon.query(QUERIES.ADD_QUSEIONS, data);
		let id = await dbcon.query('SELECT LAST_INSERT_ID()');
		let resData = await dbcon.query(QUERIES.GET_EDITED_DATA, id[0]['LAST_INSERT_ID()']);
		res.json(httpUtil.getSuccess(resData[0], 'added'));
	} catch (error) {
		console.log(error);
		res.json(httpUtil.getException(error, 'Exception Caught', 5001));
	}
};

exports.getAll = async (req, res, next) => {
	try {
		let dbData = await dbcon.query(QUERIES.GET_DATA);
		res.json(httpUtil.getSuccess(dbData));
	} catch (error) {
		res.json(httpUtil.getException(error, 'Exception Caught', 5001));
	}
};
