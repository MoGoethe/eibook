'use strict';

const express = require('express');
const bodyParser = require('body-parser');
const loginApi = require('../api/loginApi');

const router = express.Router();
router.use(bodyParser.urlencoded({ extended: true }));

router.get('/login', function(req, res, next) {
        res.render('login',{name:'home page'});
});

router.post('/api/login',loginApi,(req,res)=>{
	res.json(res.locals.result);
})

module.exports = router;
