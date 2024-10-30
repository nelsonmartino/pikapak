const { postContact } = require('../controllers/contactsController')

const postContactHandler = async (req, res) => {
  const contact = req.body
  try {
    await postContact(contact)
    res.status(200).json({ message: 'Contact query sent' })
  } catch (error) {
    res.status(400).json({ message: error.message })
  }
}

module.exports = { postContactHandler }
