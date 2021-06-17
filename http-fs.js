//1.结合fs发送文件中的数据
//2.Content-Type
//  http://tool.oschina.net/commons
//  不同的资源对应的Content-Type是不一样的
// 图片不需要指定编码
const http=require('http');
const server=http.createServer();
const fs = require('fs');
server.on('request',function (req,res) {
    const url=req.url
    if (url==='/'){
        fs.readFile('./resource/index.html',function (err,data) {
            if (err){
                res.setHeader('Content-Type',' text/plain;charset=utf-8');
                res.end('文件读取失败,请稍后重试')
            }else {
                //data 默认是二进制数据,可以通过.toString转为能识别的字符串
                res.setHeader('Content-Type',' text/html;charset=utf-8');
                res.end(data)
            }
        });
    }else if (url==='/a'){
        fs.readFile('./resource/dder.png',function (err,data) {
            if (err){
                res.setHeader('Content-Type','text/plain;charset=utf-8');
                res.end('文件读取失败,请稍后重试')
            }else {
                //data 默认是二进制数据,可以通过.toString转为能识别的字符串
                //图片不需要指定编码了
                res.setHeader('Content-Type','image/png');
                res.end(data)
            }
        });
    }
});
const port=8001;
server.listen(port,function (){
    console.log('服务器启动了....访问: http://127.0.0.1:'+port)
});
