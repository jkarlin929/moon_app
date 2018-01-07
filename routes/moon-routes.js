const express = require('express');
const moonController = require('../controllers/moon-controller');
const moonRouter = express.Router();

moonRouter.get('/', moonController.index);
moonRouter.get('/:id', moonController.show);
moonRouter.get('/:id/edit', moonController.edit);
moonRouter.put('/:id', moonController.update);


module.exports = moonRouter;