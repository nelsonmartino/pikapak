const { Router } = require('express')
const { getUsersHandler } = require('../handlers/usersHandlers')

const usersRouter = Router()

usersRouter.get('/', getUsersHandler)

module.exports = usersRouter
