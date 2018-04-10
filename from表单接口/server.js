var  http = require("http");

/*
 * querystring模块   内置模块
 * parse 把字符串转换成对象
 * 
 */

var   querystring = require("querystring");

var url = require("url");
http.createServer(function(request,response){
	
	//post  on data监听接受数据
	var  postData = "";
	request.on('data',function(chunk){
		postData += chunk;
	})
	//结束客户端传送来的数据
	request.on('end',function(){
		    var  postObj = querystring.parse(postData);
			var obj = {
				"result":1,
				"message":"form表单请求成功",
				"data":postObj
			}
			//设置状态码 和 响应头
			response.writeHead(200,{
				'Content-type':'text/html;charset=utf8',
				//cors 设置允许所有的域名访问
				'Access-Control-Allow-Origin':'*'
			});
			//返回数据
			response.write("<script>alert('诺曼底登陆成功');</script>");
			response.end("<script>window.location.href='http://127.0.0.1:8020/%E7%AC%AC%E4%B8%89%E5%A4%A9/post%E6%8E%A5%E5%8F%A3/index.html'</script>");
			
	})
	
}).listen(8888);


