#ejs模版引擎使用说明

##基本语法
* 用<%...%>包含js代码
* 用<%=...%>输出变量 变量若包含 '<' '>' '&'等字符 会被转义
* 用<%-...%>输出变量 不转义
* 用<%- include('user/show') %>引入其他模板 包含 ./user/show.ejs
* 用<%# some comments %>来注释，不执行不输出
* <%% 转义为 '<%'


##判断
<code>
	<% if(comic) { %>
    	<h2><%=comic.name%></h2>
	<% } %>
</code>


##引用
<code>
	<%- include(somePath/file) %>
</code>


##循环
<code>
	<ul>
	    <% users.forEach(function(item){ %>
	        <li>item</li>
	    <%});%>
	</ul>
</code>