var express = require('express');

var action = require('../action/loginAction');
var router = express.Router();
router.get('/', function(req, res, next) {
         action(req,res,next);
});

module.exports = router;
