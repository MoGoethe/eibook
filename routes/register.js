var express = require('express');

var router = express.Router();
router.get('/register', function(req, res, next) {
       res.render('register',{name:'home page'});
});

module.exports = router;
