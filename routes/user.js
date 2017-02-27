var express = require('express');
/*
* /user/:id | /user/:id/center		用户中心（默认为书籍页）（√）
* /user/:id/timeline	动态（√）
* /user/:id/center	书籍（√）
* /user/:id/comments	最新评论（√）
* /user/:id/following	关注列表（√）
* /user/:id/follower	粉丝列表（√）
* /user/:id/hot		热门列表（√）
* /user/:id/likes		喜欢的书籍（√）
* /user/:id/classify	关注分类（√）
*/



var router = express.Router();
router.get('/user/:id/center', function(req, res, next) {
	res.send('user page');
});
router.get('/user/:id/:modules', function(req, res, next) {
	res.send('user page');
});

router.get('/user/:id/timeline', function(req, res, next) {
	res.send('timeline');
});

router.get('/user/:id/comments', function(req, res, next) {
	res.send('comments');
});

module.exports = router;
