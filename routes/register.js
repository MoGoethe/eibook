var express = require('express');

var action = require('../action/registerAction');
var router = express.Router();
router.get('/register', function(req, res, next) {
         action(req,res,next);
});

module.exports = router;
