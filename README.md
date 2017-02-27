# EI'BOOK(going...,正在努力中，只有下班时间才能做。)

* 打开git bash
* git clone https://github.com/MoGoethe/eibook.git
* npm i (苹果机器可能需要 sudo npm i )全局安装需要管理员权限
* node server 
* 打开浏览器，输入localhost:8080/login    用户名密码暂时可以使用admin完成登录功能，
###2017-02-06  start


##拦截
* 登录判断
* session判断
* 新鲜机制
* 持久化机制
* 路由判断



##疑点
* 登录：
	* 输入用户名密码
	* 点击登录
	* ajax发送请求（地址：/api/login）
	* 返回结果
		* 成功
			* 写入session，cookie
			* 跳转到主页（获取cookie/写入全局变量）
			* 服务器如何知道（是谁）是否已经登录了？
		* 失败
			* 失败提醒
			
##注：上面是一个愚蠢的问题，脑子进水了

##登录：
* 输入用户名密码，点击登录，对比数据库，登录成功，写入session，判断session进行会话控制。

* 请求地址处理：
	* 不存在的地址
		* 直接重定向到404
	* 判断登录状态
		* 否
			* 跳转到登陆
		* 是
			* 正常跳转,写入:登录状态，用户id， session,
