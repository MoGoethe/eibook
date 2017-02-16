#路由/逻辑说明

##请求/返回逻辑
=>url请求 

=>路由 routes

=>中间件（统计器，日志文件..【异步】.）middleware

=>行为动作（数据库操作）action 

=>渲染 页面__render

=> res返回

*<font style="color: red">操作全部使用异步请求完成</font>*


##路由设置
*<font style="color: red">注释：√为已完成页面，×为未完成页面</font>*

####登陆注册首页
* /			首页（√）
* /login			登陆（√）
* /register		注册（√）

####其他用户相关
* /user/:id		用户主页（商品列表(默认)，动态，最新评论）（×）
* /user/:id/timeline	动态（×）
* /user/:id/comments	最新评论（×）

####自己相关
* /mine/:id/following	关注列表（√）
* /mine/:id/follower	粉丝列表（√）
* /mine/:id/likes	喜欢的书籍（×）
* /mine/:id/classical	关注分类（×）

####书籍分类
* /c/name		书籍分类列表（默认提供N个分类，可以自定义分类??）（×）

####具体书籍详情
* /book/:id		具体商品（×）

####查询结果页
* /search?keyword=keyword&page=1&type=notebook			搜索结果，（提供参数关键字，页面，类别）（×）

####消息页面
* /notifications/comments	评论提醒（√）
* /notifications/chats		交谈对话（√）
* /notifications/requests		请求（？是否需要）（×）
* /notifications/likes		喜欢提醒（√）
* /notifications/follow		关注提醒（√）
* /notifications/other		其他消息提醒（×）


####通用页面
* /find/new			最新上架（×）
* /find/weekly			一周最火（×）
* /find/recommend		每日推荐（×）
* /find/history			历史最火（×）
* /find/random			随机查看（×）


