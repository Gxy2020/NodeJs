const http=require('http');
const server=http.createServer();

server.on('request',function (req,res) {
    //响应类型,在服务器默认发送的数据,其实是utf8编码的内容
    //但是浏览器不知道你是utf8编码内容
    //浏览器在不知道服务器响应内容的编码的情况下会按照当前操作系统的默认编码去解析,中文操作系统默认是gbk
    //解决方法正确的告诉浏览器
    console.log('收到客户端请求,请求路径:'+req.url);
    const url=req.url;
    if (url === '/plain'){
        res.setHeader('Content-Type',' text/plain;charset=utf-8');
        res.end('hello 世界');
    }else if (url==='/html'){
        res.setHeader('Content-Type',' text/html;charset=utf-8')
        res.end('<h1>hello html</h1><br><a href="http://www.baidu.com">点我</a>')
    }else {
        res.end('404 Not Found')
    }

});
const port=8001;
server.listen(port,function () {
    console.log('服务器启动了....访问:http://127.0.0.1:'+port)
});
