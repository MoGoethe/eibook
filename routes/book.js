var express = require('express');

var router = express.Router();

router.param('id',(req,res,next,id)=>{

	next();
})

router.get('/book/:id', function(req, res, next) {
	res.send('respond with a resource of book witch id is eql ID');
});

module.exports = router;
