//1.引包
const express = require('express');
//2.创建你的服务器应用程序,也就是原来的http.createServer()
var app=express();
//公开指定目录
//当省略第一个参数的时候,则可以通过省略/public的方式来访问
app.use(express.static('./public/'));
app.get('/',function (req,res) {
    res.send('hello express!')
});
app.get('/about',function (req,res) {
    res.send('你好,我是express!')
});
app.get('/login',function (req,res) {
    res.send('login page')
});
app.listen(3000,function () {
    console.log('app is running.... ')
});

