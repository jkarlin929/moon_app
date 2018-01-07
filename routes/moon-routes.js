const express = require('express');
const moonController = require('../controllers/moon-controller');
const moonRouter = express.Router();

moonRouter.get('/', moonController.index);

moonRouter.get('/:id', moonController.show);

module.exports = moonRouter;