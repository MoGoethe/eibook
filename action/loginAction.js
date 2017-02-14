const LoginPage = require('../views/loginPage');

module.exports = (req,res,next)=>{
	res.writeHead(200,{'Content-Type':'text/html'});
	res.end(new LoginPage().render());
}