'use strict';

var abstructPage = require("./abstructClass2");

class LoginPage extends abstructPage{

	constructor(){
		super();
	}

	_render(){
		return `
		<div class="login-content register">
			<div class="login-main">
				<h2><a href="./login.html">登录</a>·<span>注册</span></h2>
				<div class="login-list">
					<span class="input-icon"><i class="icon-user"></i></span>
					<input class="input-box user" type="text" placeholder="用户名">
				</div>
				<div class="login-list" style="margin-top: -1px;">
					<span class="input-icon"><i class="icon-lock"></i></span>
					<input class="input-box password" type="text" placeholder="密码">
				</div>
				<div class="login-list" style="margin-top: -1px;">
					<span class="input-icon"><i class="icon-lock"></i></span>
					<input class="input-box password" type="text" placeholder="重复密码">
				</div>
				<div class="login-list" style="margin-top: -1px;">
					<span class="input-icon"><i class="icon-repeat"></i></span>
					<input class="input-box authcode" type="text" placeholder="验证码">
				</div>
				<div class="login-list">
					<span class="login-btn">注册</span>
				</div>
			</div>
			<div class="sign-with-otherway">
				<p class="splice"><span>其他社交账号登录</span></p>
				<div class="otherway-list">
					<a href="#"><i class="icon-facebook-sign"></i></a>
					<a href="#"><i class="icon-google-plus-sign"></i></a>
					<a href="#"><i class="icon-github-sign"></i></a>
					<a href="#"><i class="icon-twitter-sign"></i></a>
					<a href="#"><i class="icon-linkedin-sign"></i></a>
				</div>
			</div>
		</div>
		`
	}

}
module.exports = LoginPage;