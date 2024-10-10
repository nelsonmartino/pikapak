const { Router } = require('express')
const usersRouter = require('./usersRouter')
const contactsRouter = require('./contactsRouter')

const routes = Router()

routes.use('/users', usersRouter)
routes.use('/contacts', contactsRouter)

module.exports = routes
