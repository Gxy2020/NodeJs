const http=require('http');
const fs=require('fs');
const server=http.createServer();

const wwwDir='./www';
server.on('request',function (req,res) {
    const  url=req.url;
// /index.html       wwwDir+ /index.html
// /a.txt            wwwDir+ /a.txt
// /apple/login.html wwwDir+ /apple/login.html
// /img/dder.png     wwwDir+ /img/dder.png
    var filePath='/index.html'
    if (url!=='/'){
        filePath=url;
    }
    fs.readFile(wwwDir+filePath,function (err,data) {
        if (err){
            return  res.end('404 Not Found')
        }
        res.end(data);
    })
    // console.log(filePath,wwwDir+filePath)
});
const port=8001;
server.listen(port,function () {
    console.log('服务器启动了....访问:http://127.0.0.1:'+port)
});
