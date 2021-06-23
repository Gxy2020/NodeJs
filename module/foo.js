var foo='bar';
function add(x,y) {
    return x+y;
}
//只能得到我想要给你的成员,这样的目的解决遍历命名冲突的问题
// exports.add=add;原来
//直接使用,可以使用挂载的模式
module.exports=add;

//你可以认为在每个模块最后return了这个exports对象
// exports=add 不可行,module.exports=add-->可以

// exports是一个对象,可以通过对此为这个对象实现对外导出多个成员
exports.str='hello';
//希望加载得到直接就是一个:方法,字符串,数字,数组

