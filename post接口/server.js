var  http = require("http");//导入http模块

/*
 * querystring模块   内置模块
 * parse 把字符串转换成对象
 * 
 */

var   querystring = require("querystring");//导入querystring内置模块

var url = require("url");//导入url内置模块
http.createServer(function(request,response){
	console.log("创建启动服务成功")
//	var getUrl = url.parse(request.url,true).query;
//	console.log(getUrl)
	//post  on data监听接受数据
	var  postData = "";//声明一个空的字符串
	request.on('data',function(chunk){//on data监听接受数据
										//chunk是数据
		postData += chunk;				//应的字符窜保存数据，数据是持续监听，所以要加等于
	//	console.log(postData)
	})

	
	//结束客户端传送来的数据
	request.on('end',function(){
		    var  postObj = querystring.parse(postData);//把字符串转换成对象	
		    console.log(postData)
			var obj = {			//创建一个对象								
				"result":1,
				"message":"请求成功",
				code:200,
				"data":postObj
			}
			//设置状态码 和 响应头//响应头信息是给浏览器的
			response.writeHead(200,{//可以返回状态码,200
				
				'Content-type':'text/html;charset=utf8',
				//cors 设置允许所有的域名访问
				'Access-Control-Allow-Origin':'*'
			});
			//返回数据
			response.end( JSON.stringify(obj) );
	})
	
	
	

	
}).listen(8989,function(){
	console.log("8989端口成功")
});


