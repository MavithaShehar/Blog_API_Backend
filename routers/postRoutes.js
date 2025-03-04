const express = require('express')
const routers = express.Router();

const authController = require('../controllers/postController')

routers.post('/', authController.create);
routers.get('/:id', authController.getById); 
routers.get('/', authController.getAll);
routers.put('/:id', authController.update);
routers.delete('/:id', authController.delete); 



module.exports = routers;