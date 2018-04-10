var  http = require("http");

/*
 * url模块   内置模块
 * parse 把url地址解析成为一个对象
 */

var url = require("url");
http.createServer(function(request,response){
	console.log("创建服务成功")
	/*
	 * parse 方法  把url解析成为一个对象   其中query是url地址？后面的参数
	 * 第一个参数  url地址
	 * 第二参数     是否将query字符串转换成对象
	 */
	var getUrl = url.parse(request.url,true).query;
	console.log(getUrl)
	var obj = {
		"result":1,
		"message":"请求成功"
	}
	//设置状态码 和 响应头
	response.writeHead(200,{
		'Content-type':'text/html;charset=utf8'
	});
	
	//返回数据
	response.end( getUrl.cb + '('+ JSON.stringify(obj)+')' );
	
}).listen(8888,function(){
	console.log("端口8888成功")
});


