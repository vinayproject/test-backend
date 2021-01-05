'use strict';
const router = require('express').Router();
const API = require('./../constants/Api');
const { asyncMiddleware } = require('./../middlewares/asyncMiddleware');
const { Save, edit, getAll } = require('./handler');

router.post(API.SAVE, asyncMiddleware(Save));
router.post(API.EDIT, asyncMiddleware(edit));
router.get(API.ROOT, asyncMiddleware(getAll));

module.exports = router;
