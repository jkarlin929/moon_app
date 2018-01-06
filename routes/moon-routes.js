const express = require('express');
const moonController = require('../controllers/moon-controller');
const moonRouter = express.Router();

moonRouter.get('/', moonController.index);

module.exports = moonRouter;