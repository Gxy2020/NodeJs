//使用Node构建Web服务器
//在Node中专门提供了一个核心模块：http

//1.加载核心模块
var http=require('http');

//2.使用http.createServer()方法创建一个web服务器
//	返回一个Server实例
var server=http.createServer();

//3.服务器：提供服务，发请求，接受请求，处理请求
server.on('request',function(req,res){
	console.log('收到客户端请求,请求路径：'+req.url)
	// res.write('hello')
	// res.write('nodejs')
	// res.end(' end')
	var url=req.url //获取到的是
	// if(url==='/'){
	// 	res.end('index page')
	// }else if (url==='/login'){
	// 	res.end('login page')
	// }else {
	// 	res.end('404 Not Found')
	// }
	if(url==='/products'){
		var products= [
			{
			name:'苹果13',
			price:8888
			},
			{
				name:'phone12',
				price:7777
			},
			{
				name:'phone11',
				price:6666
			}
		]
		//响应内容只能是二进制数据,或者字符串
		//数字,对象,数组,布尔值
		res.end(JSON.stringify(products));
	}

})
//4.绑定端口号，启动服务器
server.listen(8000,function(){
	console.log('服务器启动成功，通过http://127.0.0.1:8000/来访问')
})
