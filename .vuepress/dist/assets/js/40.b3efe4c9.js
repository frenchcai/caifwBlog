(window.webpackJsonp=window.webpackJsonp||[]).push([[40],{323:function(t,s,a){"use strict";a.r(s);var e=a(14),n=Object(e.a)({},(function(){var t=this,s=t._self._c;return s("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[s("ol",[s("li",[t._v("List item")])]),t._v(" "),s("p",[t._v("@[toc]")]),t._v(" "),s("h2",{attrs:{id:"http协议"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#http协议"}},[t._v("#")]),t._v(" http协议")]),t._v(" "),s("h3",{attrs:{id:"定义"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#定义"}},[t._v("#")]),t._v(" 定义")]),t._v(" "),s("p",[t._v("http ，全称为"),s("code",[t._v("Hypertext Transfer Protocol，")]),t._v("中文翻译过来就是 "),s("code",[t._v("超文本传输协议")]),t._v("。一种"),s("code",[t._v("客户端——服务端")]),t._v("协议，是一个简单的请求—响应协议。他是web上进行数据交换的基础。")]),t._v(" "),s("p",[t._v("我们日常上网冲浪浏览的网页，通常是有"),s("code",[t._v("多个文件组合合成")]),t._v("——包括HTML文件、JavaScript文件、CSS文件、图片资源等文件，经过浏览器构建出来的，才会最终以画面的形式展示到屏幕前。")]),t._v(" "),s("p",[t._v("这些文件是存储在远程的服务器（另一台电脑），我们浏览器通过发起一个请求，这个请求被"),s("code",[t._v("封装在一个http 请求内部")]),t._v("，服务器也是通过这个"),s("code",[t._v("http 请求这个协议")]),t._v("，解析出来服务器要返回什么内容作为响应。")]),t._v(" "),s("p",[s("img",{attrs:{src:"https://img-blog.csdnimg.cn/direct/0138eca522b0460d9ddf393d15f86b44.png",alt:"在这里插入图片描述"}}),t._v("\n接下来我们来了解一些http 的发展历史")]),t._v(" "),s("h3",{attrs:{id:"http-发展"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#http-发展"}},[t._v("#")]),t._v(" http 发展")]),t._v(" "),s("h4",{attrs:{id:"http-0-9-单行协议"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#http-0-9-单行协议"}},[t._v("#")]),t._v(" http/0.9--单行协议")]),t._v(" "),s("p",[s("code",[t._v("最初版本的 HTTP 协议并没有版本号")]),t._v("，后来它的版本号被定位在 0.9 以区分后来的版本。"),s("code",[t._v("HTTP/0.9 极其简单")]),t._v("："),s("code",[t._v("请求由单行指令构成")]),t._v("，以唯一可用方法 "),s("code",[t._v("GET 开头")]),t._v("，其后跟目标"),s("code",[t._v("资源的路径")]),t._v("（一旦连接到服务器，协议、服务器、端口号这些都不是必须的）。\n例如下面的请求\nHTTP/0.9 只需要 GET开头。后面跟随资源路径")]),t._v(" "),s("div",{staticClass:"language-javascript line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-javascript"}},[s("code",[s("span",{pre:!0,attrs:{class:"token constant"}},[t._v("GET")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),t._v("mypage"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("html\n")])]),t._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[t._v("1")]),s("br")])]),s("p",[t._v("响应也极其简单的：只包含"),s("code",[t._v("响应文档本身")]),t._v("。"),s("code",[t._v("那时候资源还是静态的")]),t._v("。")]),t._v(" "),s("div",{staticClass:"language-javascript line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-javascript"}},[s("code",[s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),t._v("html"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v("\n  这是一个非常简单的 "),s("span",{pre:!0,attrs:{class:"token constant"}},[t._v("HTML")]),t._v(" 页面\n"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),t._v("html"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v("\n")])]),t._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[t._v("1")]),s("br"),s("span",{staticClass:"line-number"},[t._v("2")]),s("br"),s("span",{staticClass:"line-number"},[t._v("3")]),s("br")])]),s("p",[t._v("0.9版本和后面版本很大不同，响应的内容"),s("code",[t._v("不包含HTTP 头")]),t._v("，这意味着只有HTML 文件可以传送，无法传输其他类型的文件。")]),t._v(" "),s("p",[s("code",[t._v("有没有对应的状态码")]),t._v("，一旦出现问题，一个特殊的包含问题描述信息的HTML文件将被发回，供人们查看，")]),t._v(" "),s("h4",{attrs:{id:"http-1-0-构建可扩展性"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#http-1-0-构建可扩展性"}},[t._v("#")]),t._v(" http/1.0--构建可扩展性")]),t._v(" "),s("p",[t._v("因为http/0.9 有很大问题，http1.0 在其基础上有了优化，有一下的方面")]),t._v(" "),s("ul",[s("li",[t._v("增加"),s("code",[t._v("协议版本号")]),t._v("，这个版本号会随着每一次请求发送，追加在末尾（HTTP/1.0 会追加到"),s("code",[t._v("get 行")]),t._v("）")]),t._v(" "),s("li",[t._v("增加"),s("code",[t._v("HTTP 标头 的概念")]),t._v("，无论是请求还是响应，允许传输"),s("code",[t._v("元数据")]),t._v("，使得"),s("code",[t._v("协议更加灵活")])]),t._v(" "),s("li",[t._v("在http 标头的功能下，具备传输出纯超文本外，其他文件的能力(借助"),s("code",[t._v("Content-Type 字段")]),t._v(")")])]),t._v(" "),s("p",[t._v("一个典型的请求类似这样")]),t._v(" "),s("div",{staticClass:"language-html line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-html"}},[s("code",[t._v("GET /mypage.html HTTP/1.0\nUser-Agent: NCSA_Mosaic/2.0 (Windows 3.1)\n\n200 OK\nDate: Tue, 15 Nov 1994 08:12:31 GMT\nServer: CERN/3.0 libwww/2.17\nContent-Type: text/html\n"),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("HTML")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n一个包含图片的页面\n  "),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("IMG")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("SRC")]),s("span",{pre:!0,attrs:{class:"token attr-value"}},[s("span",{pre:!0,attrs:{class:"token punctuation attr-equals"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')]),t._v("/myimage.gif"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')])]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("HTML")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n")])]),t._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[t._v("1")]),s("br"),s("span",{staticClass:"line-number"},[t._v("2")]),s("br"),s("span",{staticClass:"line-number"},[t._v("3")]),s("br"),s("span",{staticClass:"line-number"},[t._v("4")]),s("br"),s("span",{staticClass:"line-number"},[t._v("5")]),s("br"),s("span",{staticClass:"line-number"},[t._v("6")]),s("br"),s("span",{staticClass:"line-number"},[t._v("7")]),s("br"),s("span",{staticClass:"line-number"},[t._v("8")]),s("br"),s("span",{staticClass:"line-number"},[t._v("9")]),s("br"),s("span",{staticClass:"line-number"},[t._v("10")]),s("br"),s("span",{staticClass:"line-number"},[t._v("11")]),s("br")])]),s("p",[t._v("接下来是第二个连接，请求获取图片（并具有相同的响应）：")]),t._v(" "),s("div",{staticClass:"language-html line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-html"}},[s("code",[t._v("GET /myimage.gif HTTP/1.0\nUser-Agent: NCSA_Mosaic/2.0 (Windows 3.1)\n\n200 OK\nDate: Tue, 15 Nov 1994 08:12:32 GMT\nServer: CERN/3.0 libwww/2.17\nContent-Type: text/gif\n(这里是图片内容)\n")])]),t._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[t._v("1")]),s("br"),s("span",{staticClass:"line-number"},[t._v("2")]),s("br"),s("span",{staticClass:"line-number"},[t._v("3")]),s("br"),s("span",{staticClass:"line-number"},[t._v("4")]),s("br"),s("span",{staticClass:"line-number"},[t._v("5")]),s("br"),s("span",{staticClass:"line-number"},[t._v("6")]),s("br"),s("span",{staticClass:"line-number"},[t._v("7")]),s("br"),s("span",{staticClass:"line-number"},[t._v("8")]),s("br")])]),s("p",[t._v("在这些优化被提出来之后，仅仅是一种尝试，并没有引进到实际的工作中作为标准。因为中间出现一些客户端和服务器的互操作问题，直到1996年才被解决，并发布文档 RFC 1945 定义了 HTTP/1.0。")]),t._v(" "),s("h4",{attrs:{id:"https"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#https"}},[t._v("#")]),t._v(" https")]),t._v(" "),s("p",[t._v("由于http 是明文传输的，数据安全问题急需解决。1994年，网景公司在 HTTP 基本的"),s("code",[t._v("TCP/IP")]),t._v("协议基础上，创建一个额外的"),s("code",[t._v("加密传输层：SSL")]),t._v("。但是SSL1.0 没有对外发布。\nSSL2.0 及其后继者SSL3.0 允许通过加密来保障服务器和客户端之间的交换信息真实性。最终SSL在标准化道路成为TLS 。")]),t._v(" "),s("p",[t._v("https 就是在http 基础上"),s("code",[t._v("增加一层SSL加密传输层")]),t._v("，使得信息交换更加安全。")]),t._v(" "),s("h4",{attrs:{id:"http-1-1-标准化的协议"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#http-1-1-标准化的协议"}},[t._v("#")]),t._v(" http/1.1--标准化的协议")]),t._v(" "),s("p",[t._v("http1.1 在http1.1 基础上，消除大量歧义内容并进行多项改进，如下")]),t._v(" "),s("ul",[s("li",[s("p",[t._v("连接可以复用，减少"),s("code",[t._v("http断开与重新连接的时间")]),t._v("，加快响应")])]),t._v(" "),s("li",[s("p",[t._v("增加"),s("code",[t._v("管线化技术")]),t._v("，即"),s("code",[t._v("允许第一个请求被完全发送出去之后，就可以接着发送第二个请求")]),t._v("，无需等待第一个请求被响应，降低延迟。")])]),t._v(" "),s("li",[s("p",[s("code",[t._v("支持响应分块")]),t._v("，这个对动态内容很实用，因为服务器一开始也不知道要一共发送多少内容，通过分块形式传输到客户端，客户端接受到第一块数据，就开始处理，加快的客户端响应时间。")])]),t._v(" "),s("li",[s("p",[t._v("引入"),s("code",[t._v("额外的缓存控制机制")])])]),t._v(" "),s("li",[s("p",[t._v("引入"),s("code",[t._v("内容协商机制")]),t._v("，包括语言(Accept-Language)、编码(Accept-Encoding)、类型等。并"),s("code",[t._v("允许客户端和服务器之间约定")]),t._v("以最合适的内容进行交换。")])]),t._v(" "),s("li",[s("p",[t._v("增加 "),s("code",[t._v("Host 标头")]),t._v("，能够使不同域名配置在同一个 IP 地址的服务器上。")])])]),t._v(" "),s("p",[t._v("一个典型的请求流程，所有请求都通过一个连接实现，看起来就像这样：")]),t._v(" "),s("div",{staticClass:"language-html line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-html"}},[s("code",[t._v('GET /zh-CN/docs/Glossary/Simple_header HTTP/1.1\nHost: developer.mozilla.org\nUser-Agent: Mozilla/5.0 (Macintosh; Intel Mac OS X 10.9; rv:50.0) Gecko/20100101 Firefox/50.0\nAccept: text/html,application/xhtml+xml,application/xml;q=0.9,*/*;q=0.8\nAccept-Language: en-US,en;q=0.5\nAccept-Encoding: gzip, deflate, br\nReferer: https://developer.mozilla.org/zh-CN/docs/Glossary/Simple_header\n\n200 OK\nConnection: Keep-Alive\nContent-Encoding: gzip\nContent-Type: text/html; charset=utf-8\nDate: Wed, 20 Jul 2016 10:55:30 GMT\nEtag: "547fa7e369ef56031dd3bff2ace9fc0832eb251a"\nKeep-Alive: timeout=5, max=1000\nLast-Modified: Tue, 19 Jul 2016 00:59:33 GMT\nServer: Apache\nTransfer-Encoding: chunked\nVary: Cookie, Accept-Encoding\n\n(content)\n\n\nGET /static/img/header-background.png HTTP/1.1\nHost: developer.mozilla.org\nUser-Agent: Mozilla/5.0 (Macintosh; Intel Mac OS X 10.9; rv:50.0) Gecko/20100101 Firefox/50.0\nAccept: */*\nAccept-Language: en-US,en;q=0.5\nAccept-Encoding: gzip, deflate, br\nReferer: https://developer.mozilla.org/zh-CN/docs/Glossary/Simple_header\n\n200 OK\nAge: 9578461\nCache-Control: public, max-age=315360000\nConnection: keep-alive\nContent-Length: 3077\nContent-Type: image/png\nDate: Thu, 31 Mar 2016 13:34:46 GMT\nLast-Modified: Wed, 21 Oct 2015 18:27:50 GMT\nServer: Apache\n\n(image content of 3077 bytes)\n')])]),t._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[t._v("1")]),s("br"),s("span",{staticClass:"line-number"},[t._v("2")]),s("br"),s("span",{staticClass:"line-number"},[t._v("3")]),s("br"),s("span",{staticClass:"line-number"},[t._v("4")]),s("br"),s("span",{staticClass:"line-number"},[t._v("5")]),s("br"),s("span",{staticClass:"line-number"},[t._v("6")]),s("br"),s("span",{staticClass:"line-number"},[t._v("7")]),s("br"),s("span",{staticClass:"line-number"},[t._v("8")]),s("br"),s("span",{staticClass:"line-number"},[t._v("9")]),s("br"),s("span",{staticClass:"line-number"},[t._v("10")]),s("br"),s("span",{staticClass:"line-number"},[t._v("11")]),s("br"),s("span",{staticClass:"line-number"},[t._v("12")]),s("br"),s("span",{staticClass:"line-number"},[t._v("13")]),s("br"),s("span",{staticClass:"line-number"},[t._v("14")]),s("br"),s("span",{staticClass:"line-number"},[t._v("15")]),s("br"),s("span",{staticClass:"line-number"},[t._v("16")]),s("br"),s("span",{staticClass:"line-number"},[t._v("17")]),s("br"),s("span",{staticClass:"line-number"},[t._v("18")]),s("br"),s("span",{staticClass:"line-number"},[t._v("19")]),s("br"),s("span",{staticClass:"line-number"},[t._v("20")]),s("br"),s("span",{staticClass:"line-number"},[t._v("21")]),s("br"),s("span",{staticClass:"line-number"},[t._v("22")]),s("br"),s("span",{staticClass:"line-number"},[t._v("23")]),s("br"),s("span",{staticClass:"line-number"},[t._v("24")]),s("br"),s("span",{staticClass:"line-number"},[t._v("25")]),s("br"),s("span",{staticClass:"line-number"},[t._v("26")]),s("br"),s("span",{staticClass:"line-number"},[t._v("27")]),s("br"),s("span",{staticClass:"line-number"},[t._v("28")]),s("br"),s("span",{staticClass:"line-number"},[t._v("29")]),s("br"),s("span",{staticClass:"line-number"},[t._v("30")]),s("br"),s("span",{staticClass:"line-number"},[t._v("31")]),s("br"),s("span",{staticClass:"line-number"},[t._v("32")]),s("br"),s("span",{staticClass:"line-number"},[t._v("33")]),s("br"),s("span",{staticClass:"line-number"},[t._v("34")]),s("br"),s("span",{staticClass:"line-number"},[t._v("35")]),s("br"),s("span",{staticClass:"line-number"},[t._v("36")]),s("br"),s("span",{staticClass:"line-number"},[t._v("37")]),s("br"),s("span",{staticClass:"line-number"},[t._v("38")]),s("br"),s("span",{staticClass:"line-number"},[t._v("39")]),s("br"),s("span",{staticClass:"line-number"},[t._v("40")]),s("br"),s("span",{staticClass:"line-number"},[t._v("41")]),s("br"),s("span",{staticClass:"line-number"},[t._v("42")]),s("br")])]),s("h4",{attrs:{id:"http-2"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#http-2"}},[t._v("#")]),t._v(" http/2")]),t._v(" "),s("p",[t._v("http/2在http1.1基础上做了以下的改进")]),t._v(" "),s("ul",[s("li",[s("p",[t._v("HTTP/2 使用"),s("code",[t._v("二进制协议进行传输")]),t._v("，相比于"),s("code",[t._v("HTTP/1.X的文本传输协议")]),t._v("，拥有更快的"),s("code",[t._v("解析和编码速度")]),t._v("，响应速度更快。")])]),t._v(" "),s("li",[s("p",[s("code",[t._v("采用多路复用")]),t._v("。并行的请求能够在同一个TCP连接中处理请求和响应，移除了HTTP/1.X 中顺序和阻塞约束。")]),t._v(" "),s("p",[t._v("http/1.1 的管线化技术"),s("code",[t._v("虽然支持在同一个tcp连接上，发起多个请求")]),t._v("，但"),s("code",[t._v("服务器还是按照请求顺序来返回请求结果")]),t._v("。也就是说，如果第一个请求时间很长，一样会影响其他请求的响应。")]),t._v(" "),s("p",[t._v("而http/2.0 多路复用解决了这个问题，"),s("code",[t._v("真正做到不同请求并行处理，互不影响")]),t._v("。")])]),t._v(" "),s("li",[s("p",[t._v("压缩了标头。因为标头在很多类型请求都是相似的，移除了重复和重复传输的数据")])]),t._v(" "),s("li",[s("p",[t._v("允许服务器"),s("code",[t._v("在客户端缓存中填充数据")]),t._v("，通过一个叫服务器推送机制赖提前请求。")])])]),t._v(" "),s("h4",{attrs:{id:"http-3"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#http-3"}},[t._v("#")]),t._v(" http/3")]),t._v(" "),s("p",[t._v("http/3.0 在传输层采用 "),s("code",[t._v("QUIC")]),t._v("而不是 TCP，它有以下的特点")]),t._v(" "),s("ul",[s("li",[t._v("多路复用，通过"),s("code",[t._v("UDP")]),t._v("运行多个流，每个流可以单独实现数据丢包检测和重传，比Http/2基于一个流检测丢失机制处理速度更快。")])]),t._v(" "),s("h2",{attrs:{id:"http-工作机制"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#http-工作机制"}},[t._v("#")]),t._v(" http 工作机制")]),t._v(" "),s("p",[t._v("当客户端想要和服务端进行数据交换，都需要进过下面的几步")]),t._v(" "),s("ol",[s("li",[t._v("创建一个TCP连接：TCP连接被"),s("code",[t._v("用来发送一条或者多条请求")]),t._v("，以及用来"),s("code",[t._v("接受响应信息")]),t._v("。")]),t._v(" "),s("li",[t._v("发送一个HTTP报文：HTTP报文在HTTP/2采用二进制之前都是可读的，http/2 报文信息报封装在帧中，使得不可读，但原理是相同的。")])]),t._v(" "),s("div",{staticClass:"language-javascript line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-javascript"}},[s("code",[s("span",{pre:!0,attrs:{class:"token constant"}},[t._v("GET")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token constant"}},[t._v("HTTP")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("1.1")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token literal-property property"}},[t._v("Host")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" developer"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("mozilla"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("org\nAccept"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),t._v("Language"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" zh\n")])]),t._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[t._v("1")]),s("br"),s("span",{staticClass:"line-number"},[t._v("2")]),s("br"),s("span",{staticClass:"line-number"},[t._v("3")]),s("br")])]),s("ol",{attrs:{start:"3"}},[s("li",[t._v("读取服务端返回的报文")])]),t._v(" "),s("div",{staticClass:"language-javascript line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-javascript"}},[s("code",[s("span",{pre:!0,attrs:{class:"token constant"}},[t._v("HTTP")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("1.1")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("200")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token constant"}},[t._v("OK")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token literal-property property"}},[t._v("Date")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" Sat"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("09")]),t._v(" Oct "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("2010")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("14")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("28")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("02")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token constant"}},[t._v("GMT")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token literal-property property"}},[t._v("Server")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" Apache\nLast"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),t._v("Modified"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" Tue"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("01")]),t._v(" Dec "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("2009")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("20")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("18")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("22")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token constant"}},[t._v("GMT")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token literal-property property"}},[t._v("ETag")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"51142bc1-7449-479b075b2891b"')]),t._v("\nAccept"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),t._v("Ranges"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" bytes\nContent"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),t._v("Length"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("29769")]),t._v("\nContent"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),t._v("Type"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" text"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),t._v("html\n\n"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("!")]),s("span",{pre:!0,attrs:{class:"token constant"}},[t._v("DOCTYPE")]),t._v(" html"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v("…（此处是所请求网页的 "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("29769")]),t._v(" 字节）\n")])]),t._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[t._v("1")]),s("br"),s("span",{staticClass:"line-number"},[t._v("2")]),s("br"),s("span",{staticClass:"line-number"},[t._v("3")]),s("br"),s("span",{staticClass:"line-number"},[t._v("4")]),s("br"),s("span",{staticClass:"line-number"},[t._v("5")]),s("br"),s("span",{staticClass:"line-number"},[t._v("6")]),s("br"),s("span",{staticClass:"line-number"},[t._v("7")]),s("br"),s("span",{staticClass:"line-number"},[t._v("8")]),s("br"),s("span",{staticClass:"line-number"},[t._v("9")]),s("br"),s("span",{staticClass:"line-number"},[t._v("10")]),s("br")])]),s("ul",[s("li",[t._v("关闭连接或者为后续请求重用连接。")])]),t._v(" "),s("h2",{attrs:{id:"小结"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#小结"}},[t._v("#")]),t._v(" 小结")]),t._v(" "),s("ul",[s("li",[t._v("HTTP 是请求请求-响应协议，其通过"),s("code",[t._v("TCP或者TLS连接")]),t._v("来发送和接受响应信息")]),t._v(" "),s("li",[t._v("HTTP/1.1 实现"),s("code",[t._v("管线化技术")]),t._v("，允许TCP连接上，可以并行"),s("code",[t._v("发送多个请求")]),t._v("，但响应处理还是按照先进先出原则，也会造成堵塞")]),t._v(" "),s("li",[t._v("HTTP/2 "),s("code",[t._v("采用二进制格式")]),t._v("，采用"),s("code",[t._v("多路复用机制")]),t._v("，可以做到同一个T"),s("code",[t._v("CP连接上并行处理请求和响应")]),t._v("，解决阻塞问题")])])])}),[],!1,null,null,null);s.default=n.exports}}]);