const { getUsers } = require('../controllers/usersControllers')

const getUsersHandler = (req, res) => {
  const users = getUsers()
  res.status(200).json({ message: users })
}

module.exports = { getUsersHandler }
