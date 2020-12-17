const usersRouter = require('express').Router()
const userController = require('../controllers/usersController')

usersRouter.get('/',userController.getAllUsers)

usersRouter.post('/',userController.createUser)

usersRouter.get('/:userId',userController.getUser)

usersRouter.put('/:userId',userController.updateUser)

usersRouter.delete('/:userId',userController.deleteUser)

module.exports = usersRouter