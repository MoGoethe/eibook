var express = require('express');

var router = express.Router();
router.get('/user/:id', function(req, res, next) {
	res.send('user page');
});

router.get('/user/:id/timeline', function(req, res, next) {
	res.send('timeline');
});

router.get('/user/:id/comments', function(req, res, next) {
	res.send('comments');
});

module.exports = router;
