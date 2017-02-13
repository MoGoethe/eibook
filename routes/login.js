var express = require('express');

var router = express.Router();
router.get('/login', function(req, res, next) {
	res.writeHead(200,{'Content-Type':'text/html'});
	res.send('login');
});

module.exports = router;
