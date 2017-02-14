'use strict';

class abstructPage{
	constructor(){

	}
	_render(){
		throw new Error('子类实现具体界面以及功能');
	}

	render(){
		return `
			<!DOCTYPE html>
<html lang="en">
<head>
	<meta charset="UTF-8">
	<title>EIBOOK</title>
	<link rel="shortcut icon" href=" /favicon.ico" /> 
	<link rel="stylesheet" href="../css/base.css">
	<link rel="stylesheet" href="../css/common.min.css">
	<link rel="stylesheet" href="../css/login-register.min.css">
	<link rel="stylesheet" href="../lib/font-awesome/css/font-awesome.min.css">
</head>
<body>
	<div class="login-bg"></div>
	<div class="login">
		<span class="login-logo">EI'BOOK</span>
		<div class="login-content">
			${this._render()}
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
	</div>
<script src="./lib/particle/dev/particleground.all.js"></script>
<script>
!(function(){
	return new Particleground.wave( '.login-bg', {
		num: 3,
		lineColor: ['rgba(0, 190, 112, .5)', 'rgba(0, 190, 112, .7)', 'rgba(0, 190, 112, .9)'],
		// 三条线依次的边框宽度
		lineWidth: [ .5, .7, .9 ],
		// 三条线依次的偏移值
		offsetLeft: [ 2, 1, 0 ],
		// 三条线都向下偏移容器高度的0.75倍, [ 0.75, 0.5, 0.3 ]
		offsetTop: .85,
		// 三条线依次的波峰高度
		crestHeight: [ 8, 16, 24 ],
		// 三条线都只有两个波峰(波纹)
		rippleNum: 2,
		speed: .01
	});
})()
</script>
</body>
</html>
		`
	}
}

module.exports = abstructPage;