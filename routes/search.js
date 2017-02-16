var express = require('express');

var router = express.Router();
router.get('/search/keyword', function(req, res, next) {
	res.send('user page');
});

module.exports = router;
