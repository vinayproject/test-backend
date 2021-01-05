'use strict';

/**
 * If request is sucess
 *
 * @param {any} payLoad It is any value to send as response.
 * @param {string} errorMessage It is string value to send as respone message
 * @return {object} {status=200, errorCode=null, errorMessage='OK', payLoad=data }
 */
exports.getSuccess = (payLoad = null, msg) => {
	return {
		statusCode: 200,
		errorCode: null,
		status: 'OK',
		payLoad,
		msg,
	};
};

/**
 * If resource is created.
 *
 * @param {any} payLoad It is any value to send as response.
 * @param {string} errorMessage It is string value to send as respone message
 * @return {object} {status=201, errorCode=null, errorMessage='Created', payLoad=data }
 */
exports.getCreated = (payLoad = null, message = 'Created') => {
	return {
		statusCode: 201,
		errorCode: null,
		message,
		payLoad,
	};
};

/**
 * If any invalid request or request data.
 *
 * @param {array} error It is an array of error code and error message.
 * @return {object} {status=400, errorCode=error[0], errorMessage='Bad Request', payLoad=null }
 */
exports.getBadRequest = (errorMessage) => {
	return {
		statusCode: 400,
		errorMessage: errorMessage,
		payLoad: null,
	};
};

/**
 * If any server side Exception.
 *
 * @param {array} error It is an array of error code and error message.
 * @return {object} {status=500, errorCode=error[0], errorMessage='Internal Server Error', payLoad=null }
 */
exports.getException = (payload, msg, errCode) => {
	return {
		statusCode: 500,
		errCode,
		payload,
		msg,
		status: 'NOK',
	};
};

/**
 * If any Unauthorized request.
 *
 * @param {array} error It is an array of error code and error message.
 * @return {object} {status=401, errorCode=error[0], errorMessage='Unauthorized', payLoad=null }
 */
// UNAUTHORIZED(401, "Unauthorized"),
exports.getUnauthorized = (error = [null, 'Unauthorized']) => {
	return {
		status: 401,
		errorCode: error[0],
		errorMessage: error[1],
		payLoad: null,
	};
};

/**
 * If Access denined.
 *
 * @param {array} error It is an array of error code and error message.
 * @return {object} {status=403, errorCode=error[0], errorMessage='Forbidden', payLoad=null }
 */
exports.getAccessDenined = (error = [null, 'Forbidden']) => {
	return {
		status: 403,
		errorCode: error[0],
		errorMessage: error[1],
		payLoad: null,
	};
};

/**
 * If Requested data or record is not found.
 *
 * @param {array} error It is an array of error code and error message.
 * @return {object} {status=404, errorCode=error[0], errorMessage='Not Found', payLoad=null }
 */
exports.getNotFound = (errorMessage) => {
	return {
		status: 404,
		errorCode: error[0],
		errorMessage,
		payLoad: null,
	};
};
