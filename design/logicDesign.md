#路由/逻辑说明

##请求/返回逻辑
=>url请求 

=>路由 routes

=>中间件（统计器，日志文件..【异步】.）middleware

=>行为动作（数据库操作）action 

=>渲染 页面__render

=> res返回

*<font style="color: red">操作全部使用异步请求完成</font>*


##基础路由设置
*<font style="color: red">注释：√为已完成页面，×为未完成页面</font>*

####登陆注册首页
* /			首页（√）
* /login			登陆（√）
* /register		注册（√）

####其他用户相关
* /user/:id | /user/:id/center		用户中心（默认为书籍页）（×）
* /user/:id/timeline	动态（√）
* /user/:id/center	书籍（√）
* /user/:id/comments	最新评论（√）
* /user/:id/following	关注列表（√）
* /user/:id/follower	粉丝列表（√）
* /user/:id/hot		热门列表（√）
* /user/:id/likes		喜欢的书籍（√）
* /user/:id/classify	关注分类（√）

####书籍分类
* /classify/name	书籍分类列表（默认提供N个分类，可以自定义分类??）（×）

####具体书籍详情
* /book/:id		具体商品（×）

####查询结果页
* /search?keyword=keyword&page=1&type=notebook			搜索结果，（提供参数关键字，页面，类别）（×）

####消息页面
* /notifications/comments	评论提醒（√）
* /notifications/chats		交谈对话（√）
* /notifications/requests		请求（？是否需要）（×）
* /notifications/likes		点赞提醒（√）
* /notifications/follow		关注提醒（√）
* /notifications/other		其他消息提醒（×）


####通用页面
* /discover/new			最新上架（√）
* /discover/weekly			一周最火（√）
* /discover/recommend		每日推荐（√）
* /discover/history			历史最火（√）
* /discover/random			随机查看（√）

####其他辅助页面
* 忘记密码/找回密码
* 404重定向页面
* 商品上架页面
* 



##请求路由设置

* /api/login（post）