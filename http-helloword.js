const http=require('http');
const fs=require('fs');
const server=http.createServer();

const wwwDir='./www';
server.on('request',function (req,res) {
    const  url=req.url;
    if (url==='/'){
        fs.readFile(wwwDir+'/index.html',function (err,data) {
            if (err){
                //return有两个作用:1.方法返回值.2.阻止代码继续往后执行
               return  res.end('404 Not Found')
            }
            res.end(data);
        })
    }else if (url==='/a.txt') {
        fs.readFile(wwwDir+'/a.txt',function (err,data) {
            if (err){
                //return有两个作用:1.方法返回值.2.阻止代码继续往后执行
                return  res.end('404 Not Found')
            }
            res.end(data);
        })
    }else if (url==='/index.html'){
        fs.readFile(wwwDir+'/index.html',function (err,data) {
            if (err){
                //return有两个作用:1.方法返回值.2.阻止代码继续往后执行
                return  res.end('404 Not Found')
            }
            res.end(data);
        })
    }else if (url==='/apple/login.html'){
        fs.readFile(wwwDir+'/login.html',function (err,data) {
            if (err){
                //return有两个作用:1.方法返回值.2.阻止代码继续往后执行
                return  res.end('404 Not Found')
            }
            res.end(data);
        })
    }else if (url==='/img/dder.png'){
        fs.readFile(wwwDir+'/img/dder.png',function (err,data) {
            if (err){
                //return有两个作用:1.方法返回值.2.阻止代码继续往后执行
                return  res.end('404 Not Found')
            }
            res.end(data);
        })
    }

});
const port=8001;
server.listen(port,function () {
    console.log('服务器启动了....访问:http://127.0.0.1:'+port)
});
