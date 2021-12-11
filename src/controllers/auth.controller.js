import User from '../models/User'
import jwt from 'jsonwebtoken'
import config from '../config'

export const signUp = async (req, res) => {
  const { username, email, password, roles } = req.body
  console.log(username, email, password)

  const newUser = new User({
    username,
    email,
    password: await User.encryptPassword(password)
  })
  const saveUser = await newUser.save()

  const token = jwt.sign({ id: saveUser._id }, config.SECRET, {
    expiresIn: 86400 // 24 hours
  })

  res.status(200).json({ newUser, token })
}

export const signIn = async (req, res) => {}
