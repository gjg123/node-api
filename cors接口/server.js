var  http = require("http");

/*
 * url模块   内置模块
 * parse 把url地址解析成为一个对象
 */

var url = require("url");
http.createServer(function(request,response){
	/*
	 * parse 方法  把url解析成为一个对象   其中query是url地址？后面的参数
	 * 第一个参数  url地址
	 * 第二参数     是否将query字符串转换成对象
	 */
	var getUrl = url.parse(request.url,true).query;
	
	var obj = {
		"result":1,
		"message":"请求成功"
	}
	//设置状态码 和 响应头
	response.writeHead(200,{
		'Content-type':'text/html;charset=utf8',
		//cors 设置允许所有的域名访问
//		'Access-Control-Allow-Origin':'*'
	});
	
	//返回数据
	response.end( JSON.stringify(obj) );
	
}).listen(8888);


