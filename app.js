const express = require('express')
const connectDB = require('./config/db')
const cors = require('cors')
const userRouter = require('./routes/userRouter')
const codeRouter = require('./routes/codeRouter')
const cookieParser = require('cookie-parser')
const mongoose = require('mongoose')

const app = express()

app.use(cors())
app.use(express.json())
app.use(cookieParser())
app.use('/api/v1/users', userRouter)
app.use('/api/v1/code', codeRouter)

app.use('*', (req, res) => {
  res.status(404).json({ message: 'Route not found' })
})

connectDB()
const port = process.env.PORT || 5555
app.listen(port, () => {
  console.log('Hey Dhaval, Your server is up and runningf!')
})
