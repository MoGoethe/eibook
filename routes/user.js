var express = require('express');
/*
* /user/:id | /user/:id/center		用户中心（默认为书籍页）（√）
* /user/:id/timeline	动态（√）
* /user/:id/book	书籍（√）
* /user/:id/comments	最新评论（√）
* /user/:id/following	关注列表（√）
* /user/:id/follower	粉丝列表（√）
* /user/:id/hot		热门列表（√）
* /user/:id/likes		喜欢的书籍（√）
* /user/:id/classify	关注分类（√）
*/
var router = express.Router();

/*
	res.locals.data = {
		user_id : "",
		login_status:"",
		displayBlock:{
			center:true, //当前应该显示的模块，数据通过ajax获取，
			timeline:false,
			center:false,
			comments:false,
			following:false,
			follower:false,
			hot:false,
			likes:false,
			classify:false
		}
	}
*/
router.param('modulName',(req,res,next,moduleName)=>{
	res.locals.displayBlock = {
		center:true, 
		timeline:false,
		center:false,
		comments:false,
		following:false,
		follower:false,
		hot:false,
		likes:false,
		classify:false
	}
	switch(moduleName){
		case 'center':
			res.locals.displayBlock[moduleName] = true;
			break;
		case 'timeline':
			res.locals.displayBlock[moduleName] = true;
			break;
		case 'comments':
			res.locals.displayBlock[moduleName] = true;
			break;
		case 'following':
			res.locals.displayBlock[moduleName] = true;
			break;
		case 'follower':
			res.locals.displayBlock[moduleName] = true;
			break;
		case 'hot':
			res.locals.displayBlock[moduleName] = true;
			break;
		case 'likes':
			res.locals.displayBlock[moduleName] = true;
			break;
		case 'classify':
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

router.get('/user/:id/:modulName', data,function(req, res, next) {
	res.render('user');
});


module.exports = router;
