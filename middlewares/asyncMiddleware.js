'use strict';

exports.asyncMiddleware = fn => (req, res, next) => {
  Promise.resolve(fn(req, res, next)).catch(next);
};

exports.promiseHandler = pFn => pFn.then(data => [false,data]).catch(err => [true,err]);