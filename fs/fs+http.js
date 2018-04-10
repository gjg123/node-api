var http = require("http");

var fs = require('fs');


//===============  爬取网络图片 ===================
/*
*  get方法 请求别人服务器端的数据
*  第一个参数  请求别人服务器的地址
*  第二个参数  回调函数  拿到请求到的数据
 */


// http.get('http://192.168.0.4/index.html',function(reponse){
// 	console.log("开启爬取数据了。。。。。");
// 	var getData = "";
// 	reponse.on('data',function(chunk){
// 		getData += chunk;

// 	})


// 	reponse.on('end',function(){
// 		console.log("爬取数据成功");
// 		fs.writeFile('./demo.html',getData,'utf8',function(err){
// 				if(!err){［［
// 					console.log("数据下载本地成功");
// 				}else{
// 					console.log("数据下载本地失败");
// 				}
// 		})
		

// 	})

// })



http.get('http://192.168.0.4/node.mp3',function(reponse){
	console.log("开启爬取数据了。。。。。");
	var getData = "";
	//设置接收数据的格式
	reponse.setEncoding("binary");

	reponse.on('data',function(chunk){
		getData += chunk;
		console.log(chunk);
	})


	reponse.on('end',function(){
		console.log("爬取数据成功");
		fs.writeFile('./2.jpg',getData,'binary',function(err){
				if(!err){
					console.log("数据下载本地成功");
				}else{
					console.log("数据下载本地失败");
				}
		})
		

	})

})