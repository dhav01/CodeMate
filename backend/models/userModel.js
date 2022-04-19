const mongoose = require('mongoose')
const validator = require('validator')
const bcrypt = require('bcryptjs')

const userSchema = mongoose.Schema(
  {
    name: {
      type: String,
      required: [true, 'name is required'],
    },
    email: {
      type: String,
      required: [true, 'email is required'],
      unique: true,
      lowercase: true,
      validate: [validator.isEmail, 'please enter a valid email'],
    },
    password: {
      type: String,
      required: [true, 'password is required'],
      minLength: [6, 'password length should be more than 6 characters'],
      select: false,
    },
    confirmPassword: {
      type: String,
      required: [true, 'Please confirm your password'],
      validate: {
        validator: function (el) {
          //only works on create and save!
          return el === this.password
        },
        message: 'passwords do not match!',
      },
    },
    passwordChangedAt: Date,
  },
  {
    toJSON: { virtuals: true },
    toObject: { virtuals: true },
  }
)
//using virtual property to avoid saving post ids in user document
userSchema.virtual('codes', {
  ref: 'Code',
  foreignField: 'user',
  localField: '_id',
})

//pre save middleware
userSchema.pre('save', async function (next) {
  if (!this.isModified('password')) {
    //only run the func if password is modified or added
    return next()
  }
  this.password = await bcrypt.hash(this.password, 12) //encrypting the password
  this.confirmPassword = undefined //to avoid storing confirm password in the Db

  next()
})

userSchema.methods.matchPassword = async function (
  candidatePassword,
  userPassword
) {
  return await bcrypt.compare(candidatePassword, userPassword)
}

userSchema.methods.changedPasswordAt = function (JWTTimeStamp) {
  if (this.passwordChangedAt) {
    const changedTimeStamp = parseInt(
      this.passwordChangedAt.getTime() / 100,
      10
    )
    return JWTTimeStamp < changedTimeStamp
  }
  return false
}

const User = mongoose.model('User', userSchema)

module.exports = User
