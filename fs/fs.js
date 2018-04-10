/*
* fs 内置模块
*  文件 和 文件夹的增  删 追加  读取
*/


var fs = require("fs");


/*
* mkdir 添加一个文件夹
*  第一个参数 	文件夹路径 以及文件夹名称
*  第二个参数  	监听文件夹是否创建成功
*/

// fs.mkdir('./addFs',function(err){
// 	if(!err){
// 		console.log("创建文件夹成功");
// 	}else{
// 		console.log("创建文件夹失败");
// 	}

// })


/*
* mkdir 添加一个文件夹
*  第一个参数 	文件夹路径 以及文件夹名称
*  第二个参数  	监听文件夹是否创建成功
*/

// fs.rmdir('./addFs',function(err){
// 	if(!err){
// 		console.log("删除文件夹成功");
// 	}else{
// 		console.log("删除文件夹失败");
// 	}

// })



/*
*  writeFile  写入文件  如果文件不存在 会自动帮你创建一个文件
*  第一个参数    写入文件地址和文件名
*  第二个参数    写入的内容
*  第三个参数	   写入的编码格式
*  第四个参数		回调函数  告诉我们写入成功还是失败
 */
// fs.writeFile('./index.html','这是一个什么鬼','utf8',function(err){
// 	if(!err){
// 		console.log("写入文件夹成功");
// 	}else{
// 		console.log("写入文件夹失败");
// 	}
// })


/*
*  readFile  读取文件  如果文件不存在 会自动帮你创建一个文件
*  第一个参数    写入文件地址和文件名
*  第二个参数	   写入的编码格式
*  第三个参数		回调函数  告诉我们写入成功还是失败
 */
// fs.readFile('./index.html','utf8',function(err,data){
// 	if(!err){
// 		console.log("读取文件夹成功");
// 		console.log(data);
// 	}else{
// 		console.log("读取文件夹失败");
// 	}
// })


/*
*  appendFile  追加文件  如果文件不存在 会自动帮你创建一个文件
*  第一个参数    写入文件地址和文件名
*  第二个参数    写入的内容
*  第三个参数	   写入的编码格式
*  第四个参数	   回调函数  告诉我们写入成功还是失败
 */
// fs.appendFile('./index.html','这是一个什么鬼','utf8',function(err){
// 	if(!err){
// 		console.log("追加文件夹成功");
// 	}else{
// 		console.log("追加文件夹失败");
// 	}
// })



/*
* unlink   删除文件
 */
// fs.unlink('./index.html',function(err){
// 	if(!err){
// 		console.log("删除成功");
// 	}else{
// 		console.log("删除失败");
// 	}
// });



//==========  爬取文件 ===================

fs.readFile('./index.html','utf8',function(err,data){
	if(!err){
		fs.writeFileSync('./index-node.html',data,'utf8');
	}
})








