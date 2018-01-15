const express = require('express');
const moonController = require('../controllers/moon-controller');
const moonRouter = express.Router();

moonRouter.get('/', moonController.index);
moonRouter.get('/new', moonController.new);
moonRouter.get('/:id', moonController.show);
moonRouter.get('/:id/edit', moonController.edit);
moonRouter.put('/:id', moonController.update);

moonRouter.post('/', moonController.create);
// moonRouter.post('/search', moonController.search);
moonRouter.delete('/:id', moonController.destroy);

module.exports = moonRouter;