var express = require('express');
var router = express.Router();
// var validate = require('../controllers/validate.controller.js').validate; 
var usersCtrl = require('../controllers/usersController.js'); 
const joi = require('../controllers/validateSignup.js')

router.post('/', joi.validate, usersCtrl.register); 
router.post('/login', usersCtrl.login); 
// router.get('/applicants/:job_id',validate, usersCtrl.getApplicants); 
// router.post('/login', usersCtrl.login); 
// router.get('/:username', validate, usersCtrl.getUser); 

module.exports = router; 