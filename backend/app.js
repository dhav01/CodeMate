const express = require('express')
const connectDB = require('./config/db')
const cors = require('cors')
const userRouter = require('./routes/userRouter')
const codeRouter = require('./routes/codeRouter')
const cookieParser = require('cookie-parser')
const path = require('path')
const mongoose = require('mongoose')
const dotenv = require('dotenv')

dotenv.config({ path: './backend/config/config.env' })
connectDB()
const app = express()

app.use(cors())
app.use(express.json())
app.use(cookieParser())
app.use('/api/v1/users', userRouter)
app.use('/api/v1/code', codeRouter)

const port = process.env.PORT || 5555

const __dirname1 = path.resolve()

if (process.env.NODE_ENV === 'production') {
  app.use(express.static(path.join(__dirname1, '/frontend/build')))

  app.get('*', (req, res) => {
    res.sendFile(path.resolve(__dirname1, 'frontend', 'build', 'index.html'))
  })
}
app.listen(port, () => {
  console.log(`Hey Dhaval, Your server is up and running on port ${port}!`)
})
