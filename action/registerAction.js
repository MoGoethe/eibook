const RegisterPage = require('../views/registerPage');

module.exports = (req,res,next)=>{
	res.writeHead(200,{'Content-Type':'text/html'});
	res.end(new RegisterPage().render());
}