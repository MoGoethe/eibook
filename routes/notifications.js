const express = require('express');
const router = express.Router();

/*
	####消息页面
	* /notifications/comments	评论提醒（√）
	* /notifications/chats		交谈对话（√）
	* /notifications/requests		请求（？是否需要）（×）
	* /notifications/likes		点赞提醒（√）
	* /notifications/follow		关注提醒（√）
	* /notifications/other		其他消息提醒（×）
*/	
router.param('moduleName',(req,res,next,moduleName)=>{
	res.locals.displayBlock = {
		comments:false, 
		messages:false,
		request:false,
		follow:false,
		shelve:false,
		likes:false,
		others:false
	}
	switch(moduleName){
		case 'comments':
			res.locals.displayBlock[moduleName] = true;
			break;
		case 'messages':
			res.locals.displayBlock[moduleName] = true;
			break;
		case 'request':
			res.locals.displayBlock[moduleName] = true;
			break;
		case 'follow':
			res.locals.displayBlock[moduleName] = true;
			break;
		case 'shelve':
			res.locals.displayBlock[moduleName] = true;
			break;
		case 'likes':
			res.locals.displayBlock[moduleName] = true;
			break;
		case 'others':
			res.locals.displayBlock[moduleName] = true;
			break;
		default:
			res.redirect("/404");
			break;
	}
	next();
})

function data(req,res,next){
	res.locals.data = {
		login_status : false,
		user_id: false,
		displayBlock:{}
	};
	if(typeof req.session.__LOGINSTATUS !== 'undefined' && typeof req.session.__USERID !== 'undefined'){
		res.locals.data.login_status = req.session.__LOGINSTATUS;
		res.locals.data.user_id = req.session.__USERID;
	}
	res.locals.data['displayBlock'] = res.locals.displayBlock;
	next();
}


router.get('/notifications/:moduleName', data,function(req, res, next) {
        res.render('notifications');
});

module.exports = router;










