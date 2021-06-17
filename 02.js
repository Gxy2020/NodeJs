var fs=require('fs')
fs.writeFile('./data/你好.md','我是Node.js',function(error){
	console.log('文件写入成功')
})