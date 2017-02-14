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
				<title>Document</title>
				<link href="//cdn.bootcss.com/bootstrap/4.0.0-alpha.3/css/bootstrap.min.css" rel="stylesheet">
				<script src="//cdn.bootcss.com/bootstrap/4.0.0-alpha.3/js/bootstrap.min.js"></script>
			</head>
			<body>
				<div class="container">
					${this._render()}
				</div>
			</body>
			</html>
		`
	}
}

module.exports = abstructPage;