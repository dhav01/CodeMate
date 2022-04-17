const express = require('express')
const codeController = require('../controllers/codeController')
const authController = require('../controllers/authController')
const { isLoggedIn } = require('../middlewares/isLoggedIn')
const router = express.Router()

router.route('/run').post(codeController.runCode)

router
  .route('/')
  .post(isLoggedIn, codeController.createCode)
  .get(isLoggedIn, codeController.getCodes)

//param middleware: this middleware will only run if this param is present
// router.param('id', (req, res, next, id) => {
//   console.log(`The param passed by the user is ${id}`)
//   next()
// })

router
  .route('/:id')
  .get(isLoggedIn, codeController.getCurrentCode)
  .delete(isLoggedIn, codeController.deleteCode)
  .patch(isLoggedIn, codeController.updateCode)

module.exports = router
