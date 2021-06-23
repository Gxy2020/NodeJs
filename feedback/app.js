//app application应用程序
//把当前模块所有的依赖项都声明在文件模块的最上面
//为了方便的统一处理这些静态资源,所以我们约定把所有的静态资源放到public目录
//对资源进行权限限制
// /pinglun?name=的撒的撒&message=的撒的撒的撒
// 对于这种表单提交的请求路径，由于其中具有用户动态填写的内容
// 所以你不可能通过去判断完整的 url 路径来处理这个请求
//
// 结论：对于我们来讲，其实只需要判定，如果你的请求路径是 /pinglun 的时候，那我就认为你提交表单的请求过来了
var http = require('http')
var fs = require('fs')
var template = require('art-template')
var url = require('url')
var port=8001;
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
http.createServer(function (req, res) {
    // 使用 url.parse 方法将路径解析为一个方便操作的对象，第二个参数为 true 表示直接将查询字符串转为一个对象（通过 query 属性来访问）
    var parseObj=url.parse(req.url,true)
        // var url=req.url
    // 单独获取不包含查询字符串的路径部分（该路径不包含 ? 之后的内容）
    var pathname=parseObj.pathname;
        if (pathname==='/'){
            fs.readFile('./views/index.html',function (err, data) {
                if (err){
                  return res.end('404 Not Found')
                }
                var htmlStr=template.render(data.toString(),{
                    comments:comments
                })
                res.end(htmlStr)
            })
        }else if (pathname==='/post'){
                fs.readFile('./views/post.html', function (err, data) {
                    if (err){
                        return res.end('404 Not Found')
                    }
                    res.end(data)
                })
        }else if(pathname.indexOf('/public/')===0){
            //public/css/main.css,/js,/img
            //统一处理,如果请求路径以public开头,我认为获取public的某个资源,以请求路径当作文件路径直接读取
            fs.readFile('.'+pathname,function (err, data) {
                if (err){
                    return res.end('404 Not Found')
                }
                res.end(data)
            })
        } else if (pathname === '/pinglun') {
            // 注意：这个时候无论 /pinglun?xxx 之后是什么，我都不用担心了，因为我的 pathname 是不包含 ? 之后的那个路径
            // 一次请求对应一次响应，响应结束这次请求也就结束了
            // res.end(JSON.stringify(parseObj.query))
            // console.log('收到表单请求',parseObj.query)
            // 我们已经使用 url 模块的 parse 方法把请求路径中的查询字符串给解析成一个对象了
            // 所以接下来要做的就是：
            //    1. 获取表单提交的数据 parseObj.query
            //    2. 将当前时间日期添加到数据对象中，然后存储到数组中
            //    3. 让用户重定向跳转到首页 /
            //       当用户重新请求 / 的时候，我数组中的数据已经发生变化了，所以用户看到的页面也就变了
            var comment = parseObj.query
            comment.dateTime = '2021-06-20 18:00:00'
            comments.unshift(comment)
            // 服务端这个时候已经把数据存储好了，接下来就是让用户重新请求 / 首页，就可以看到最新的留言内容了

            // 如何通过服务器让客户端重定向？
            //    1. 状态码设置为 302 临时重定向
            //        statusCode
            //    2. 在响应头中通过 Location 告诉客户端往哪儿重定向
            //        setHeader
            // 如果客户端发现收到服务器的响应的状态码是 302 就会自动去响应头中找 Location ，然后对该地址发起新的请求
            // 所以你就能看到客户端自动跳转了
            res.statusCode = 302
            res.setHeader('Location', '/')
            res.end()
        }
        else {
            fs.readFile('./views/404.html', function (err, data) {
                if (err){
                    return res.end('404 Not Found')
                }
                res.end(data)
            })
        }
        // console.log(url)
})
    .listen(port,function () {
        console.log('服务器已启动...端口号为:'+port)
    })
// 1. / index.html
// 2. 开放 public 目录中的静态资源
//    当请求 /public/xxx 的时候，读取响应 public 目录中的具体资源
// 3. /post post.html
// 4. /pinglun
//    4.1 接收表单提交数据
//    4.2 存储表单提交的数据
//    4.3 让表单重定向到 /
//        statusCode
//        setHeader

// 明天：
// 模块系统
// Express（第三方 Web 开发框架）
//    这两做的事儿，在框架里面就是一个 API 的事儿
//    使用框架的目的就是让我们更加专注于业务，而不是底层细节
