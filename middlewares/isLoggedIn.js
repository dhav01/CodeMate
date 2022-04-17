const User = require('../models/userModel')
const jwt = require('jsonwebtoken')

exports.isLoggedIn = async (req, res, next) => {
  try {
    const token = req.cookies.jwt
    if (!token) {
      return res.status(401).json({
        status: 'error',
        message: 'Please login first to continue',
      })
    }

    //if token is valid
    const decoded = await jwt.verify(token, process.env.JWT_SECRET)
    console.log(decoded)
    const freshUser = await User.findById(decoded.id)
    if (!freshUser) {
      //if user has been deleted
      res.status(404).json({
        status: 'error',
        message: 'User does not exist!',
      })
    }

    if (freshUser.changedPasswordAt(decoded.iat)) {
      res.status(401).json({
        status: 'error',
        message: 'password changed recently. Please login again!',
      })
    }
    req.user = freshUser
    next()
  } catch (err) {
    res.status(400).json({
      status: 'error',
      message: err.message,
    })
  }
}
