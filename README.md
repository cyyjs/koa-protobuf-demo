# koa-protobuf-demo
---
koa protobuf 请求示例:

运行
1、安装依赖包

```bash
yarn install
# or 
npm install
```

2、生成bundle.js文件，此文件为proto的[静态代码](https://www.npmjs.com/package/protobufjs#using-generated-static-code)，可以直接引用

```bash
npm run build # 生成bundle.js文件，此文件为proto的静态代码，可以直接引用
```

3、运行测试代码
```bash
npm run test 
```

启动`koa` 监听`3000`端口，并使用`node http`发送一个`post`模拟请求；
koa接收到请求，解析后转成`json`输出。
