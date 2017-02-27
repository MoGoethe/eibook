
function siteConfig(req,res,next,session){
	req.session.__A = "a";
	next();
}

module.exports = siteConfig;