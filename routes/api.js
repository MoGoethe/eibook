'use strict';

const express = require('express');
const bodyParser = require('body-parser');
const router = express.Router();

//import api module
//login api
const loginApi = require('../api/loginApi');
//bookDetail api
const getBookDetailApi = require('../api/getBookDetailApi');

router.use(bodyParser.urlencoded({ extended: true }));

router.get('/getbook/:id',getBookDetailApi,function(req,res,next){

});

router.post('/login',loginApi,(req,res)=>{
	res.json(res.locals.result);
});

module.exports = router;






