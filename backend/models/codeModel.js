const mongoose = require('mongoose')

const codeSchema = mongoose.Schema(
  {
    title: {
      type: String,
      required: true,
    },
    body: {
      type: String,
      required: [true, 'Code is required before saving it to the database'],
    },
    language: {
      type: String,
      required: [true, 'Please specify a language'],
    },
    notes: String,
    user: {
      type: mongoose.Schema.ObjectId,
      ref: 'User',
    },
  },
  {
    toJSON: { virtuals: true },
    toObject: { virtuals: true },
  }
)

codeSchema.pre(/^find/, function (next) {
  // this.populate({
  //   path: 'user',
  //   select: 'name',
  // })
  next()
})

const Code = mongoose.model('Code', codeSchema)

module.exports = Code
