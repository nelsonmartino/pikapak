const { getUserbyEmail, postUser } = require('../controllers/usersControllers')

// const getUserbyEmailHandler = async (req, res) => {
//   const { email } = req.query
//   try {
//     if (email) {
//       const user = await getUserbyEmail(email)
//       res.status(200).json(user)
//     } else {
//       res.status(400).json({ message: 'Email needed' })
//     }
//   } catch (error) {
//     res.status(400).json({ message: error.message })
//   }
// }

const postUserHandler = async (req, res) => {
  const user = req.body
  try {
    if (
      user.name &&
      user.surname &&
      user.email &&
      user.whatsapp &&
      user.password
    ) {
      await postUser(user)
      res.status(200).json({ message: 'User created' })
    } else {
      res.status(400).json({ message: 'Missing information' })
    }
  } catch (error) {
    res.status(400).json({ message: error.message })
  }
}

module.exports = {
  // getUserbyEmailHandler,
  postUserHandler,
}
