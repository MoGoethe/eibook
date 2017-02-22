'use strict';

function Login(req,res,next){
	var user={
		username:'admin',
		password:'admin'
	};
	res.locals.result = {};
	if(req.body.username==user.username && req.body.password==user.password){
		res.locals.result.status = 1;
		next();
	}else{
		res.locals.result.status = 0;
		next();
	}
}

module.exports = Login;