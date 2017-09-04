var http = require('http')
var bunder = require ("./bundle.js");
var AwesomeMessage = bunder.awesomepackage.AwesomeMessage;

function req(buffer) {
    var option = {
        hostname: '127.0.0.1',
        port: 3000,
        path: '/',
        method: 'post',
        data: buffer, // 接受到的buffer数据
        headers: {
            'Content-Type': 'application/octet-stream', // 发送的为二进制数据
            'Content-Length': buffer.length
        }
    }

    var req = http.request(option, function(response) {
        // 处理返回数据
        var buffers = [];
        response.on('data', function(chunk) {
            buffers.push(chunk);
        });
        response.on('end', function(error) {
            var result = {};
            if (error) {
                res(error, null)
            } else {
                var data = Buffer.concat(buffers).toString();
                console.log(data)
            }
        });
    });
    req.on('error', function(e) {
        console.log('error:', e)
    });
    req.write(option.data);
    req.end();
}

var payload = { awesomeField: "Hello word!" }; // 定义要发送到json数据
var message = AwesomeMessage.create(payload);   // 创建消息 
var buffer = AwesomeMessage.encode(message).finish(); // 编码为buffer
req(buffer) // 发送post请求
