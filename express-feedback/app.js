var express=require('express');
var bodyParser = require('body-parser')
var app=express();

app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())
app.engine('html', require('express-art-template'));

app.use('/public/',express.static('./public/'));

var comments = [
    {
        name: '张三1',
        message: '今天天气不错！',
        dateTime: '2021-06-20'
    },
    {
        name: '张三2',
        message: '今天天气不错！',
        dateTime: '2021-06-20'
    },
    {
        name: '张三3',
        message: '今天天气不错！',
        dateTime: '2021-06-20'
    },
    {
        name: '张三4',
        message: '今天天气不错！',
        dateTime: '2021-06-20'
    },
    {
        name: '张三5',
        message: '今天天气不错！',
        dateTime: '2021-06-20'
    }
]
app.get('/',function (req,res) {
    res.render('index.html',{
        comments:comments
    })
});
app.get('/post',function (req,res) {
    res.render('post.html')
});
app.post('/post',function (req,res) {
    //获取表单post数据
    //1.express没有内置获取表单post请求体的api,这里需要我们使用第三方包:npm install body-parser
    //2.配置:app.use(bodyParser.urlencoded({ extended: false })),app.use(bodyParser.json());
    // 参考网址:https://www.expressjs.com.cn/resources/middleware/body-parser.html
    //3.通过req.body获取
    var comment=req.body;
    comment.deteTime='2021-06-25 02:00:00';
    comments.unshift(comment)
    res.redirect('/')
    // console.log(req.query)
    // res.render(req.query)

})
// app.get('/pinglun',function (req,res) {
//     var comment=req.query;
//     comment.deteTime='2021-06-25 02:00:00';
//     comments.unshift(comment)
//     res.redirect('/')
//     // console.log(req.query)
//     // res.render(req.query)
// })
app.listen(3000,function () {
    console.log('running...:localhost:3000')
})
