const router = require('express').Router();
const {signUpUser} = require('../controllers/user.controller.js')

router.route('/signup').post(signUpUser)

module.exports = router;