const LoginPage = require('../views/loginPage');
/*
	这里需要从数据中获取各类数据
*/
module.exports = (req,res,next)=>{
	res.writeHead(200,{'Content-Type':'text/html'});
	res.end(new LoginPage().render());
	//res.end(new LoginPage(args).render());
	//action中提供数据到views里面负责渲染
}