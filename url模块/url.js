/**
 * url模块  内置模块
 * 1:url地址转换对象
 */
var url = require('url');

var clientUrl = "http://127.0.0.1:8888/index.php?name=武大郎";

/**
 * parse主要用来把url字符串转换成对象
 * 第一个参数  url地址
 * 第二个参数  是否让query是对象 true query就是一个对象 false就是一个字符串
 */
var objUrl = url.parse(clientUrl,true);

//console.log(objUrl);

//url.parse生成的对象
//Url {
//protocol: 'http:',									//请求协议
//slashes: true,										//协议中:后面是否有/
//auth: null,											//url的认证信息
//host: '127.0.0.1:8888',								//ip地址+端口号
//port: '8888',											//端口号
//hostname: '127.0.0.1',								//ip地址
//hash: null,											//锚点的内容
//search: '?name=武大郎',								//拿到url地址问号后面的值
//query: 'name=武大郎',									//不带问号的参数
//pathname: '/index.php',								//请求文件地址路径
//path: '/index.php?name=武大郎',						//请求文件地址路径+参数
//href: 'http://127.0.0.1:8888/index.php?name=武大郎'	//url完整地址
//}


/**
 * format  把对象转换成url地址
 */
var obj = {
	protocol: 'http:',									//请求协议
	slashes: true,										//协议中:后面是否有/
	auth: null,											//url的认证信息
	host: '127.0.0.1:8888',								//ip地址+端口号
	port: '8888',										//端口号
	hostname: '127.0.0.1',								//ip地址
	hash: null,											//锚点的内容
	search: '?name=武大郎',								//拿到url地址问号后面的值
	query: 'name=武大郎',								//不带问号的参数
	pathname: '/index.php',								//请求文件地址路径
	path: '/index.php?name=武大郎',						//请求文件地址路径+参数
}
var urlFormat = url.format(obj);
//console.log(urlFormat);


/**
 *resolve主要来用替换或者追加url地址
 * 第一个参数  url地址
 * 第二个参数  要替换追加的地址    
 */

var resolveUrl =  url.resolve('www.baidu.com/','inde.html');

var resolveUrl1 =  url.resolve('www.baidu.com/index.html','login.html');
console.log(resolveUrl1);
