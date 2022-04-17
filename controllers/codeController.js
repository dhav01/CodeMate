const Code = require('../models/codeModel')
const axios = require('axios')
const { config } = require('dotenv')

exports.runCode = async (req, res) => {
  //post the code and run the jdoodle api
  try {
    var data = JSON.stringify({
      clientId: process.env.CLIENT_ID,
      clientSecret: process.env.CLIENT_SECRET,
      script: req.body.script,
      language: req.body.language,
      stdin: req.body.stdin,
      versionIndex: '4',
    })

    var config = {
      method: 'post',
      url: process.env.COMPILE_API,
      headers: {
        'Content-Type': 'application/json',
      },
      data: data,
    }

    const response = await axios(config)
    // console.log(response)
    res.status(200).json({
      status: 'success',
      data: {
        output: JSON.stringify(response.data.output),
        memory: JSON.stringify(response.data.memory),
        cpuTime: JSON.stringify(response.data.cpuTime),
      },
    })
  } catch (error) {
    res.status(400).json({
      status: 'error',
      message: error.message,
    })
  }
}

exports.createCode = async (req, res) => {
  try {
    // const newCode = new Code({})
    // newCode.save()

    const data = {
      title: req.body.title,
      body: req.body.body,
      user: req.user,
      language: req.body.language,
    }
    const newCode = await Code.create(data)
    console.log(req.body)
    res.status(200).json({
      status: 'success',
      data: newCode,
    })
  } catch (err) {
    console.log('Error occurred while creating code', err)
    res.status(400).json({
      status: 'error',
      message: err.message,
    })
  }
}

exports.getCodes = async (req, res) => {
  //get all the codes with the help of 'user' parameter
  try {
    const newQuery = { ...req.query } //to generate hard copy

    const allCodes = await Code.find()
    // .where('language').equals('python')
    res.status(200).json({
      status: 'success',
      data: allCodes,
    })
  } catch (error) {
    res.status(400).json({
      status: 'error',
      message: error.message,
    })
  }
}

exports.getCurrentCode = async (req, res) => {
  try {
    const code = await Code.findById(req.params.id)
    res.status(200).json({
      status: 'success',
      data: code,
    })
  } catch (error) {
    res.status(400).json({
      status: 'error',
      message: error.message,
    })
  }
}

exports.updateCode = async (req, res) => {
  try {
    const updatedCode = await Code.findByIdAndUpdate(req.params.id, req.body, {
      new: true, //returns the new updated document
      runValidators: true, //run the validations set in schema on the updated document
    })
    res.status(200).json({
      status: 'success',
      message: updatedCode,
    })
  } catch (error) {
    res.status(400).json({
      status: 'error',
      message: error.message,
    })
  }
}

exports.deleteCode = async (req, res) => {
  try {
    await Code.findByIdAndDelete(req.params.id)
    res.status(204).json({
      status: 'success',
      data: null,
    })
  } catch (error) {
    res.status(400).json({
      status: 'error',
      message: error.message,
    })
  }
}
