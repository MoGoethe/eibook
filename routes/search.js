var express = require('express');

var router = express.Router();
router.get('/keyword', function(req, res, next) {
	res.send('user page');
});

module.exports = router;
