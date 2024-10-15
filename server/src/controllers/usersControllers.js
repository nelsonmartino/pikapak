const { PrismaClient } = require('@prisma/client')
const bcrypt = require('bcryptjs')

const prisma = new PrismaClient()

const getUserbyEmail = async (email) => {
  const user = await prisma.user.findUnique({ where: { email } })
  return user
}

const postUser = async (user) => {
  const hashedPassword = await bcrypt.hash(user.password, 5)

  const createdUser = await prisma.user.create({
    data: { ...user, password: hashedPassword },
  })
  return createdUser
}

module.exports = { getUserbyEmail, postUser }
