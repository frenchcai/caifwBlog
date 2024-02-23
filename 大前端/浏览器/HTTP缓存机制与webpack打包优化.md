@[toc]
## 概要
在前端开发中，经常接触到JavaScript脚本文件、CSS、HTML文件，每一次开发后，我们需要重新编译，会导致文件名发生变化。这样使得浏览网页时候，需要重新加载资源

如果能合理利用浏览器的缓存，可以提高响应速度。

浏览器`缓存涉及到客户端和服务器之间的交互`，当浏览器`请求一个资源的时候`，他首先检查`该资源是否已经存在于HTTP缓存中`，如果`存在`，并且`满足不过期条件`，浏览器则`会使用缓存的资源`，而不会从服务器重新请求。这个就是缓存的作用。

在实际的项目开发中，浏览器为我们提供下面的三种缓存机制：`强缓存、协商缓存和不使用缓存`，下面针对以上三个类型进行说明。
## 强缓存
### 定义
强缓存，直接使用缓存文件，不请求服务器。

### 开启
要实现强缓存，可以通过设置HTTP响应头和cache-control 、Expires字段来实现

 - 设置`cache-control` ：在服务器响应中添加`Cache-Control:max-age=3600`，这将告诉浏览器可以将对应http资源`缓存3600秒`。这个时间内，浏览器直接从本地缓存加载该资源，而不会向服务器发送请求。

```html
HTTP/1.1 200 OK
Date: Wed, 21 Oct 2025 07:28:00 GMT
Cache-Control: max-age=3600
Content-Type: text/html; charset=utf-8
Content-Length: 131
```

 - `设置 Expires`：另一种设置方式就是使用Expire 字段，它的值是`一个具体的时间`，例如，Expires: Wed, 21 Oct 2025 07:28:00 GMT，表示资源将在`2025 07:28:00之后过去`

## 关闭强缓存
如果需要关闭强缓存，可以使用`Cache-Control: no-cache`，这将迫使浏览器每次都向服务器发送请求，`通过协商机制来决定是否命中缓存`。

当设置成为` no-store `时，则`完全禁止使用任何缓存`，不存在协商，直接拉取服务器资源，重新加载。
## 协商缓存
浏览器协商缓存，也称为弱缓存，是一种利用HTTP响应头中的Last-Modified 和Etag字段来验证资源是否修改的机制，来决定是否使用本地缓存。在使用协商缓时候，一定要设置`cache-control：no-cache` ，这样才能发起请求，向服务器确认资源是否被修改。

### 工作机制
#### 通过Last-Modified + If-Modified-Since
1.当我们第一次请求的时候，浏览器会在头添加`Last-Modified` 字段，这个值表示`资源最后修改的时间`。

2.在这个资源`后续的请求中`，浏览器都会在`请求头中`，添加 `If-Modified-Since` 字段，这个值就是`上一次服务器在响应头添加的Last-Modified` 的值。

3.服务器接受到这个请求后，会根据 If-Modified-since 的值与服务器上的`资源做对比`，如果`值不一致，服务器资源发送变化`，则服务器`返回最新的资源`和`新的 last-Modified 字段`。

4.如果对比发现，`服务器上资源`的`最后修改时间`和`请求的 If-Modified-since一致`，则返回`304 Not Modified` 状态码，告诉浏览器可以`使用本地缓存`。

#### 通过ETag + If-None-Match
通过 ETag 方式来实现的话，原理和流程和上诉的一致，不同的是ETag 值表示`文件唯一标识`,这个值`随着随着文件内容改动而发生变化`，而如果文件`内容没有改变`，则`ETag 值不会发生变化`。

在我们实际开发中，可以将ETag 理解成为文件的hash值，一旦文件改动，hash值变化。

## 不使用缓存
不使用缓存，将告诉浏览器，每一次加载资源，都需要重服务器请求获取最新的资源文件，可以通过以下的方式来实现

 - 设置` Cache-Control` ：在响应头上，将Cache-Control 设置为 `no-store`。将禁止使用任何缓存。
 - 将`Expire `字段设置为`0 `，表示资源立马过期。


## 前端利用缓存机制，修改打包方案

### webpack 打包
我们日常的开发中，利用`webpack` 进行资源打包，默认情况下，生成的文件名称，带有`hash` 值。如下图中，用红线标出的地方，都是hash值。

![在这里插入图片描述](https://img-blog.csdnimg.cn/direct/6ed405d77edf418fa384a510039ee0fc.png)


这个`hash 值是全局的`，`不局限于当前文件`，也就是说，`只要当前项目有任何一个模块`或文件的内容`发生改动`的时候，项目的`hash值都会发生变化`。

如此一来，文件名称改动了，我们打包部署到服务后，客户端`需要重新获取资源`，而无法使用缓存来加快响应速度。

### webpack 打包名称优化
#### webpack 默认的hash 值
在Webpack中，输出文件名的哈希值默认是`[hash]`，这意味着每次构建时，	`只要项目中有任何文件发生变化`，生成的文件`哈希值`就会改变。这种哈希值与整个项目有关，因此它是全局的，`不特定于某个文件或模块`。

#### webapck其他hash 类型
我们可以通过手动配置webpack 打包文件，来实现输出文件名的hash的控制，webpack 为我们提供处理[hash] 以外的方案，如下

 - contenthash
	[contenthash] 只有`当前文件内容发生改动`，`hash值才会发生变化`。这有助于确保只有当`文件内容发生变化时`，文件名才会改变，从而有效地利用浏览器缓存。
 - chunkhash
 [chunkhash] 在一个文件中，如果`被依赖的模块`或`引入的文件资源`，`发生变化时`，`hash 值发生变化`，而如果`文件本身自己内容发生改动`，`hash值是不会变化`的。


#### 配置webpack打包
我们可以通过手动配置webpack 输出文件名，将【hash】修改为【contenthash】来优化。

在webpack 项目中，可以修改 `webpack.config.js `文件如下：

```javascript
module.exports = {
  output: {
    filename: '[name].[contenthash].js',
    chunkFilename: '[name].[contenthash].chunk.js'
  },
};
```

### webpack 代码分割优化
在我们日常开发中，常常引入第三方库，如vue.js ，elementUi等。这些第三方库，在我们`项目搭建初期`，`版本已经固定了`，`后面不需要改动`，如果修改升级，则另外讨论。

如果我们可以将这些第三方库，和自己手写的源码`分割处理`，`将第三方库独立出来`，即使我们自己写的代码改动，不会影响第三方库文件模块，从而实现缓存命中。

幸运的是，`webpack 默认带有代码分割的功能`，它基于以下的规则

 - 共享模块
 如果一个新的块可以被多个入口点共享，Webpack会将其分割出来

 - 第三方库
	来自node_modules文件夹的模块通常会被分割出来。

 - 文件大小
 如果新的块在压缩和gzip之前的大小超过30kb，Webpack也会将其分割出来。

除此之外，我们可以通过 webpack.config.js 修改，如下

```javascript
module.exports = {
  optimization: {
    splitChunks: {
      chunks: 'all',
      minSize: 30000,
      maxSize: 0,
      minChunks: 1,
      maxAsyncRequests: 5,
      maxInitialRequests: 3,
      automaticNameDelimiter: '~',
      name: true,
      cacheGroups: {
        vendors: {
          test: /[\\/]node_modules[\\/]/,
          priority: -10
        },
        default: {
          minChunks: 2,
          priority: -20,
          reuseExistingChunk: true
        }
      }
    }
  }
};
```
上面的参数，下面具体说明一下：

 - chunks
 	控制哪些模块会被拆分。可选值，有:all、async（默认）、initial。
 	`all 表示`，`所有模块都有可能被拆分`，`async `表示只拆分`动态加载`，`initial`表示`不将动态和静态一起处理`，`而是分开处理`。
 	
 - minSize : 设置`生成块最小单位`（字节单位），如果生成的块小于这个大小，那么它不会被拆分
 - maxSize： 设置`生成块最大单位`，如果生成块大于这个大小，则会拆分成多个小块
 - minChunks：设置模块被`引用的最小次数`，一个模块被引用次数`达到这个值`后，才会被`分到一个独立的包中`。
 - maxAsyncRequests:
 设置`按需加载时并行请求最大数量`。如果超过这个数量，则会把一些请求放到下一个chunk中
 - maxInitialRequests：
设置入口点最大的并行请求数量。
 - cacheGroups
 这个选项允许你`创建自定义的缓存组`，以便`更细粒度地控制哪些模块应该被分割`，以及如何命名分割出来的文件。你可以为每个缓存组设置`不同的测试条件、优先级、文件名等`。

## 小结

 - 实现强缓存，可以通过`cache-control：max-age=36000`，或这个`Expire`字段来实现
 - 关闭强缓存，可以设置 `cache-control:no-cache`、`cache-control:no-store`、`Expire：0`
 - no-cache与no-store 区别在于，`no-store禁止任何文件缓存`，无法协商，`no-cache 需要先和服务器协商`来决定是否使用缓存
 - 协商缓存，可以通过`Last-Modified/If-Modified-Since` 或者 `ETag/If-None-Match` 来实现
 - 如果协商缓存中，文件没有发生该表，则将响应状态设置为304，告诉客户端使用缓存。
 - webpack 默认使用[hash]命名，颗粒度为整个项目文件，可以通过设置为[contenthash],将颗粒度细化到文件内容。
 
 - webpack 默认带有文件分割，可以分离第三方库。

