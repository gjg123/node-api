var http =require("http");

var fs = require('fs');

http.createServer(function(request,response){

	var getUrl = request.url;
	
	if(getUrl.indexOf('.html') != -1){
		fs.readFile('.'+getUrl,'utf8',function(err,data){
		if(!err){
			console.log("读取本地文件成功");
			response.writeHead(200,{
				'content-type':'text/html;charset=utf8'
			})
			response.end(data);
		}else{
			console.log("读取本地文件失败");
		}
		})

	}else if(getUrl.indexOf('.png') != -1){
		fs.readFile('1.png','binary',function(err,data){
			if(!err){
				console.log("读取本地文件成功");
				response.writeHead(200,{
					'content-type':'image/png'
				})
				response.end(data,'binary');
			}else{
				console.log("读取本地文件失败");
			}
		})
	}


	

}).listen(8787,function(){
	console.log("8787成功")
});