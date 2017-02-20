const express = require('express');
const router = express.Router();

router.param('name',(req,res,next,name)=>{
/*
name:
	new
	weekly
	recommend
	history
	random
对分支进行解析，获取数据，传递数据。 ejs负责渲染
*/	
	switch(name){
		case 'new':
			console.log('new');
			break;
		case 'weekly':
			console.log('weekly');
			break;
		case 'recommend':
			console.log('recommend');
			break;
		case 'history':
			console.log('history');
			break;
		case 'random':
			console.log('random');
			break;
		default:
			res.redirect('/404');
	}
	next();
})

router.get('/notifications/:name', function(req, res, next) {
        res.render('notifications',{name:'notifications  '+req.params.name});
});

module.exports = router;