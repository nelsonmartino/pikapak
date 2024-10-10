const { Router } = require('express')
const { postContactHandler } = require('../handlers/contactsHandlers')

const contactsRouter = Router()

contactsRouter.post('/', postContactHandler)

module.exports = contactsRouter
