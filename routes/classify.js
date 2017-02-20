const express = require('express');
const router = express.Router();

router.param('name',(req,res,next,name)=>{
/*
name:
	查询
对分支进行解析，获取数据，传递数据。 ejs负责渲染
*/	
	console.log('now,i should find book type eql name ',name);
	next();
})

router.get('/classify/:name', function(req, res, next) {
        res.render('classify',{name:'classify '+req.params.name});
});

module.exports = router;