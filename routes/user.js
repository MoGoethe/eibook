var express = require('express');

var router = express.Router();
router.get('/id', function(req, res, next) {
	res.send('user page');
});
router.get('/center', function(req, res, next) {
	res.send('personal center');
});

module.exports = router;
