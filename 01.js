//var foo='hello nodejs'

//console.log(foo)
// 浏览器中的javaScript是没有文件操作的能力
// 但是Node中的javaScript具有文件操作的能力

// fs是file-system的简写，就是文件系统的意思
// 在Node中想要进行文件的操作就必须引用fs这个核心模块
// 在fs这个核心模块中,就提供了所有的文件操作相关的API
//例如：fs.readFile就是用来读取文件的

//1.使用require方法加载fs核心模块
// var fs= require('fs')
const fs = require('fs');
//2.读取文件,
//参数一：文件路径
//参数二：回调函数
	//error 读取失败，error就是错误对象，读取成功error就是null
	//data 读取成功，data就是读取到的数据,读取失败，error就是错误对象

fs.readFile('./data/hello.txt','utf-8',function(error,data){
	console.log(data)
})
