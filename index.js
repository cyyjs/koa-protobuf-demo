const Koa = require('koa');
const app = new Koa();
const path = require('path');
var bunder = require("./bundle.js"); // 引入编译后的proto静态js文件
var AwesomeMessage = bunder.awesomepackage.AwesomeMessage; // 获取protobuf实例

// 接受 post 请求处理
app.use(async ctx => {
    var buffers = [];
    // 监听data事件，接受传入的buffer数据，放入buffers数组中
    ctx.req.addListener('data', function(chunk) {
        buffers.push(chunk);
    });
    // 监听end事件
    ctx.req.addListener('end', function(error) {
        if (error) {
            console.log("error:", error)
        } else {
            let resultBuff = Buffer.concat(buffers) // 合并接收到的buffer数据
            var result = AwesomeMessage.decode(resultBuff); // 解码接受到的 buffer 数据
            var obj = AwesomeMessage.toObject(result)  // 转换成json对象
            console.log(obj)
        }
    });
});

// 监听3000端口
app.listen(3000);

// 发送模拟请求
require('./send.js');
