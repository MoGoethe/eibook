'use strict';

const express = require('express');
const bodyParser = require('body-parser');

const router = express.Router();
router.use(bodyParser.urlencoded({ extended: true }));

router.get('/login', function(req, res, next) {
        res.render('login',{name:"Ei'BOOK"});
});

module.exports = router;
