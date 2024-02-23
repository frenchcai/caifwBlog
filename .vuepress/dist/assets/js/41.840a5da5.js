(window.webpackJsonp=window.webpackJsonp||[]).push([[41],{322:function(s,t,a){"use strict";a.r(t);var e=a(14),r=Object(e.a)({},(function(){var s=this,t=s._self._c;return t("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[t("p",[s._v("@[toc]")]),s._v(" "),t("h2",{attrs:{id:"概要"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#概要"}},[s._v("#")]),s._v(" 概要")]),s._v(" "),t("p",[s._v("模块化，就是"),t("code",[s._v("将代码拆分成独立的块")]),s._v("，各自在"),t("code",[s._v("代码块中实现各自逻辑")]),s._v("，同时"),t("code",[s._v("自行决定引入外部代码")]),s._v("，和"),t("code",[s._v("决定对外暴露一些可以对外提供的特性功能")]),s._v("。")]),s._v(" "),t("p",[s._v("模块化包含下面特征：标识符、依赖、加载、入口等，下面具体说明一下")]),s._v(" "),t("h3",{attrs:{id:"模块标识符"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#模块标识符"}},[s._v("#")]),s._v(" 模块标识符")]),s._v(" "),t("p",[s._v("模块化标识符"),t("code",[s._v("是所有模块通用的概念")]),s._v("。模块系统可以通过"),t("code",[s._v("一个标识符")]),s._v("来代表一个模块，然后在需要调用的地方，通过这个"),t("code",[s._v("标识符来引用对应的模块")]),s._v("。")]),s._v(" "),t("p",[s._v("标识符可以是一个字符串，在原生的实现的模块系统中可能是模块文件的实际路径。有些模块化系统支持明确声明模块的标识。不管哪种方式，完备的模块化系统一定不存在模块标识符冲突问题")]),s._v(" "),t("h3",{attrs:{id:"模块依赖"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#模块依赖"}},[s._v("#")]),s._v(" 模块依赖")]),s._v(" "),t("p",[s._v("模块化系统"),t("code",[s._v("核心是管理依赖")]),s._v("。"),t("code",[s._v("指定依赖的模块与周围的环境达成一种契约")]),s._v("。本地模块"),t("code",[s._v("向模块化系统声明一处外部模块（依赖）")]),s._v("，这些外部模块"),t("code",[s._v("对于当前模块的运行是必需的")]),s._v("。模块系统会"),t("code",[s._v("检查这些依赖")]),s._v("，进而"),t("code",[s._v("保证外部模块能够被正确加载到本地模块")]),s._v("，完成初始化。")]),s._v(" "),t("p",[s._v("每个模块都会有一个唯一的标识符关联，用于检索模块。这个标识符通常是"),t("code",[s._v("模块本身内部声明的命名空间路径的字符串")]),s._v("或者在某些系统是"),t("code",[s._v("文件的路径")]),s._v("。")]),s._v(" "),t("h3",{attrs:{id:"模块加载"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#模块加载"}},[s._v("#")]),s._v(" 模块加载")]),s._v(" "),t("p",[s._v("加载模块的概念是由"),t("code",[s._v("模块依赖产生的")]),s._v("。当一个外部模块被指定为依赖的时候，本地模块"),t("code",[s._v("在准备执行时")]),s._v("，外部模块已经"),t("code",[s._v("完成初始化")]),s._v("，等着被执行。\n在浏览器中，加载模块涉及其中代码执行，但必须在所有依赖都加载并执行之后。")]),s._v(" "),t("h3",{attrs:{id:"入口"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#入口"}},[s._v("#")]),s._v(" 入口")]),s._v(" "),t("p",[s._v("相互依赖的模块必须指定一个入口，这个也是代码执行的起点。因为JavaScript是顺序执行的，并且是单线程，所有代码必须有执行的起点")]),s._v(" "),t("p",[s._v("在ES6之前，出现需要的模块化解决方案，现在具体说明一下")]),s._v(" "),t("h2",{attrs:{id:"commonjs"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#commonjs"}},[s._v("#")]),s._v(" CommonJS")]),s._v(" "),t("p",[s._v("CommonJS 规范，用于Node.js 服务端，实现模块化代码组织，其语法不能直接在浏览器运行。")]),s._v(" "),t("h3",{attrs:{id:"语法"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#语法"}},[s._v("#")]),s._v(" 语法")]),s._v(" "),t("p",[s._v("CommonJS 模块定义需要使用"),t("code",[s._v("require（）")]),s._v("指定依赖，而使用"),t("code",[s._v("exports 对象")]),s._v("定义自己公共的API")]),s._v(" "),t("p",[s._v("请求模块也会加载相应的模块，而把"),t("code",[s._v("模块赋值给变量也非常常见")]),s._v("，但赋值"),t("code",[s._v("不是必须的")]),s._v("，调用require() 意味着模块会"),t("code",[s._v("原封不动的加载进来")]),s._v("。")]),s._v(" "),t("p",[s._v("下面代码展示")]),s._v(" "),t("div",{staticClass:"language-javascript line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-javascript"}},[t("code",[t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("//moduleA 文件")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("var")]),s._v(" moduleB "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("require")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"./moduleB"')]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\nmodule"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("exports "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token literal-property property"}},[s._v("stuff")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" moduleB"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("doStuff"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("//moduleC 引入moduleA ")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("var")]),s._v(" moduleA "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("require")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"./moduleA"')]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\nmoduleA"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("stuff"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br"),t("span",{staticClass:"line-number"},[s._v("4")]),t("br"),t("span",{staticClass:"line-number"},[s._v("5")]),t("br"),t("span",{staticClass:"line-number"},[s._v("6")]),t("br"),t("span",{staticClass:"line-number"},[s._v("7")]),t("br"),t("span",{staticClass:"line-number"},[s._v("8")]),t("br"),t("span",{staticClass:"line-number"},[s._v("9")]),t("br")])]),t("p",[s._v("moduleA 通过使用"),t("code",[s._v("模块定义")]),s._v("的"),t("code",[s._v("相对路径")]),s._v("来"),t("code",[s._v("指定自己对moduleB的依赖")])]),s._v(" "),t("p",[s._v("在 moudleC 文件，通过require 引入 moduleA ，并给它起一个"),t("code",[s._v("别名 moduleA")]),s._v("。直接通过"),t("code",[s._v("moduleA.stuff")]),s._v(" 便可以访问 "),t("code",[s._v("moudleA 的staff")]),s._v(".")]),s._v(" "),t("p",[t("code",[s._v("moudle.exports")]),s._v(" 对象非常灵活，有多种使用方式。如果只想"),t("code",[s._v("导出一个实体")]),s._v("，可以直接"),t("code",[s._v("module.exports")]),s._v(" 赋值")]),s._v(" "),t("p",[t("img",{attrs:{src:"https://img-blog.csdnimg.cn/direct/f58d729f882445178a4cc8adfc91f280.png",alt:"在这里插入图片描述"}}),s._v("\n通过上面的语法，整个模块就导出一个字符串，可以通过下面的方式使用：\n"),t("img",{attrs:{src:"https://img-blog.csdnimg.cn/direct/6cade86d86114b3a98d75cc12c9c2fa8.png",alt:"在这里插入图片描述"}})]),s._v(" "),t("h3",{attrs:{id:"单例"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#单例"}},[s._v("#")]),s._v(" 单例")]),s._v(" "),t("p",[s._v("模块加载是"),t("code",[s._v("单例的")]),s._v("，无论在"),t("code",[s._v("一个模块")]),s._v("在"),t("code",[s._v("require() 中被引用多少次")]),s._v("，"),t("code",[s._v("模块只会被加载一次")]),s._v("，模块第一次请求加载后会被缓存，再次请求模块，都只是"),t("code",[s._v("取得模块的缓存")]),s._v("，如下面的代码所示\n"),t("img",{attrs:{src:"https://img-blog.csdnimg.cn/direct/2e6edf5a14c7427499b1cbb22a28f319.png",alt:"在这里插入图片描述"}})]),s._v(" "),t("h2",{attrs:{id:"amd"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#amd"}},[s._v("#")]),s._v(" AMD")]),s._v(" "),t("p",[s._v("CommonJS "),t("code",[s._v("以服务端为目标环境")]),s._v("，能够"),t("code",[s._v("同步地一次性")]),s._v("把"),t("code",[s._v("所有依赖都加载到内存")]),s._v("，无需考虑异步加载的问题。")]),s._v(" "),t("p",[s._v("而"),t("code",[s._v("异步加载模块定义")]),s._v("，AMD( asynchronous Module Definition) 则"),t("code",[s._v("以浏览器为执行环境")]),s._v("，需要"),t("code",[s._v("考虑网络延迟问")]),s._v("题，因此"),t("code",[s._v("实现了按需依次加载依赖")]),s._v("，并在"),t("code",[s._v("加载完成后，立即执行依赖模块")]),s._v("。")]),s._v(" "),t("p",[t("code",[s._v("ADM模块实现的核心")]),s._v("是用"),t("code",[s._v("函数包装模块定义")]),s._v("。这样防止声明全局变量，并"),t("code",[s._v("允许加载器库控制何时加载")]),s._v("。")]),s._v(" "),t("p",[s._v("包装模块函数是"),t("code",[s._v("全局的define 的参数")]),s._v("，它是由"),t("code",[s._v("AMD加载器库的实现定义的")]),s._v("。")]),s._v(" "),t("h3",{attrs:{id:"语法-2"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#语法-2"}},[s._v("#")]),s._v(" 语法")]),s._v(" "),t("p",[s._v("AMD 模块可以使用字符串指定自己的依赖，代码示例如下")]),s._v(" "),t("div",{staticClass:"language-javascript line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-javascript"}},[t("code",[t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("/")]),t("span",{pre:!0,attrs:{class:"token constant"}},[s._v("ID")]),s._v("为’ moduleA'的模块定义。moduleA依赖moduleB\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("//moduleB会异步加载")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("define")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),t("span",{pre:!0,attrs:{class:"token string"}},[s._v("'moduleA'")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),t("span",{pre:!0,attrs:{class:"token string"}},[s._v("'moduleB'")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("function")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),t("span",{pre:!0,attrs:{class:"token parameter"}},[s._v("moduleB")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("\n\t"),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("return")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("\n\t\t"),t("span",{pre:!0,attrs:{class:"token literal-property property"}},[s._v("stuff")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" moduleB"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("doStuff")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n\t"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br"),t("span",{staticClass:"line-number"},[s._v("4")]),t("br"),t("span",{staticClass:"line-number"},[s._v("5")]),t("br"),t("span",{staticClass:"line-number"},[s._v("6")]),t("br"),t("span",{staticClass:"line-number"},[s._v("7")]),t("br")])]),t("p",[s._v("AMD 也支持require 和 exports 对象，通过他们可以在AMD模块工厂函数内部定义CommonJS 风格的模块。\n"),t("img",{attrs:{src:"https://img-blog.csdnimg.cn/direct/05646359eed9406eb054afafc78f0b00.png",alt:"在这里插入图片描述"}})]),s._v(" "),t("p",[s._v("动态依赖也是通过这种方式支持的：\n"),t("img",{attrs:{src:"https://img-blog.csdnimg.cn/direct/33e2baa82caa4ca0aed8209bc73b6dae.png",alt:"在这里插入图片描述"}})]),s._v(" "),t("h2",{attrs:{id:"umd"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#umd"}},[s._v("#")]),s._v(" UMD")]),s._v(" "),t("p",[s._v("为了统一CommonJs 和 AMD 生态系统，通用模块定义（UMD,universal module definition）规范应运而生。")]),s._v(" "),t("p",[s._v("UMD 创建了两个系统都可以使用的模块代码，本质上UMD会"),t("code",[s._v("检测依赖使用了哪种系统")]),s._v("，然后"),t("code",[s._v("进行适配")]),s._v("，并"),t("code",[s._v("把所有的逻辑包装")]),s._v("在一个"),t("code",[s._v("立即调用的函数表达式")]),s._v("中。")]),s._v(" "),t("h3",{attrs:{id:"核心语法"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#核心语法"}},[s._v("#")]),s._v(" 核心语法")]),s._v(" "),t("p",[t("img",{attrs:{src:"https://img-blog.csdnimg.cn/direct/f36f32110e1249fe918e571ee2c4b4c9.png",alt:"在这里插入图片描述"}})]),s._v(" "),t("h2",{attrs:{id:"es6模块化"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#es6模块化"}},[s._v("#")]),s._v(" ES6模块化")]),s._v(" "),t("p",[s._v("ES6 引入了模块规范，使得浏览器支持原生的模块化加载。\n下面对 ES6模块规范进行说明")]),s._v(" "),t("h3",{attrs:{id:"模块标签及定义"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#模块标签及定义"}},[s._v("#")]),s._v(" 模块标签及定义")]),s._v(" "),t("p",[s._v('浏览器中，我们可以通过在 script 标签中 加入 type="module"  的属性，告诉浏览器这一块代码应该作为哦模块执行，而不是作为传统的脚本执行。模块可以嵌入网页中，也可以作为外部文件引入。')]),s._v(" "),t("div",{staticClass:"language-javascript line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-javascript"}},[t("code",[t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("<")]),s._v("script type"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"module"')]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// 模块代码")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("<")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("/")]),s._v("script"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("<")]),s._v("script type"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"module src="')]),s._v("path"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("/")]),s._v("to"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("/")]),s._v("myModule"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v('js"'),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("<")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("/")]),s._v("script"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v("\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br"),t("span",{staticClass:"line-number"},[s._v("4")]),t("br")])]),t("p",[s._v("与传统的脚本不同，所有模块都会想 "),t("code",[s._v("script defer")]),s._v("加载的 脚本一样按顺序执行。 当解析到"),t("code",[s._v('script type="moudle"')]),s._v(" 标签后会立即下载模块文件，但执行会延迟到文档解析完成，因此"),t("code",[s._v("不会阻塞文档解析")]),s._v("。")]),s._v(" "),t("p",[s._v("下面演示模块执行顺序\n"),t("img",{attrs:{src:"https://img-blog.csdnimg.cn/direct/098249b6becc46cc84ca90a6aba9e986.png",alt:"在这里插入图片描述"}})]),s._v(" "),t("h3",{attrs:{id:"模块导出和导入"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#模块导出和导入"}},[s._v("#")]),s._v(" 模块导出和导入")]),s._v(" "),t("p",[s._v("ES6模块导出和CommonJs非常相似，通过export 关键字导出模块，ES6支持两种导出，命名导出和默认导出，不同的导出方式的引入方式不同。")]),s._v(" "),t("h4",{attrs:{id:"命名导出和导入"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#命名导出和导入"}},[s._v("#")]),s._v(" 命名导出和导入")]),s._v(" "),t("p",[s._v("命名导出，可以定义一个变量，然后通过export 将变量导出，例子如下\n"),t("img",{attrs:{src:"https://img-blog.csdnimg.cn/direct/394cd8555421421dab1976f4252a3e3b.png",alt:"在这里插入图片描述"}}),s._v("\n或者下面的导出也是可以的\n"),t("img",{attrs:{src:"https://img-blog.csdnimg.cn/direct/36bf8a3a4cd14cd382cb1677711e36ad.png",alt:"在这里插入图片描述"}})]),s._v(" "),t("p",[s._v("导入方式如下：\n通过命名导出的，要使用 import 关键字 和{ }")]),s._v(" "),t("div",{staticClass:"language-javascript line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-javascript"}},[t("code",[t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("import")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("foo"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("from")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"./moudleA"')]),s._v("\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br")])]),t("h4",{attrs:{id:"默认导出和导入"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#默认导出和导入"}},[s._v("#")]),s._v(" 默认导出和导入")]),s._v(" "),t("p",[s._v("默认导出如下：\n使用export default 导出foo")]),s._v(" "),t("div",{staticClass:"language-javascript line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-javascript"}},[t("code",[t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("const")]),s._v(" foo "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" foo'\n"),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("export")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("default")]),s._v(" foo\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br")])]),t("p",[s._v("或者使用下面的方式也是可以的")]),s._v(" "),t("div",{staticClass:"language-javascript line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-javascript"}},[t("code",[t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("const")]),s._v(" foo "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v("'foo'")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("//等同于export default foo:")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("export")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("foo "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("as")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("default")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br")])]),t("p",[s._v("导入方式如下")]),s._v(" "),t("div",{staticClass:"language-javascript line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-javascript"}},[t("code",[t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("import")]),s._v(" foo "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("from")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"./foo.js"')]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("//或者使用 as")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("import")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("default")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("as")]),s._v(" foo"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("from")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"./foo.js"')]),s._v("\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br")])]),t("p",[s._v("如果一个模块有多个命名空间\n比如以下")]),s._v(" "),t("div",{staticClass:"language-javascript line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-javascript"}},[t("code",[t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("const")]),s._v(" foo"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"foo"')]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("bar "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"bar"')]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("baz "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"baz"')]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("export")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("foo"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("bar"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("baz"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br")])]),t("p",[s._v("我们可以使用 "),t("code",[s._v("*")]),s._v(" 一次性全部导入，然后通过as 指定一个别名，通过别名访问对应的命名空间。")]),s._v(" "),t("div",{staticClass:"language-javascript line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-javascript"}},[t("code",[t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("import")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("*")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("as")]),s._v(" Foo "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("from")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"./foo.js"')]),s._v("\nconsole"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("log")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("Foo"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("foo"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v('//"foo"')]),s._v("\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br")])]),t("h4",{attrs:{id:"命名导出和默认导出混用"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#命名导出和默认导出混用"}},[s._v("#")]),s._v(" 命名导出和默认导出混用")]),s._v(" "),t("p",[s._v("如果一个模块使用了命名空间和默认导出\n如下面的示例")]),s._v(" "),t("div",{staticClass:"language-javascript line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-javascript"}},[t("code",[t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("export")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("const")]),s._v(" foo "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"foo"')]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("export")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("default")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("const")]),s._v(" baz "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"baz"')]),s._v("\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br")])]),t("p",[s._v("导出")]),s._v(" "),t("div",{staticClass:"language-javascript line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-javascript"}},[t("code",[t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("import")]),s._v(" baz"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("foo"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("from")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"./foo.js"')]),s._v("\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br")])]),t("h3",{attrs:{id:"模块行为"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#模块行为"}},[s._v("#")]),s._v(" 模块行为")]),s._v(" "),t("p",[s._v("ES6借鉴了 CommonJS 和AMD 很多优秀的特性，下面简单列举一些")]),s._v(" "),t("ul",[t("li",[s._v("模块代码只在加载后执行")]),s._v(" "),t("li",[s._v("模块只加载一次")]),s._v(" "),t("li",[s._v("模块式单例的")]),s._v(" "),t("li",[s._v("模块可以定义公共接口，其他模块可以基于这个公共接口观察和交互")]),s._v(" "),t("li",[s._v("模块可以请求加载其他模块")]),s._v(" "),t("li",[s._v("支持循环依赖")])]),s._v(" "),t("p",[s._v("除此之外，ES6还增加自己的特性")]),s._v(" "),t("ul",[t("li",[s._v("ES6模块在严格模式执行")]),s._v(" "),t("li",[s._v("ES6不共享命名空间")]),s._v(" "),t("li",[s._v("模块顶级this 是undefined")]),s._v(" "),t("li",[s._v("模块定义的var 不会添加到window")]),s._v(" "),t("li",[s._v("ES6模块式异步加载和执行的")])]),s._v(" "),t("h2",{attrs:{id:"小结"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#小结"}},[s._v("#")]),s._v(" 小结")]),s._v(" "),t("ul",[t("li",[s._v("CommonJS 用于Node 服务端模块化，采取module.exports 对象 + require 导出导入")]),s._v(" "),t("li",[s._v("AMD 异步加载模块化，可以用于浏览器解决脚本异步加载，通过全局的define 函数定义模块")]),s._v(" "),t("li",[s._v("UMD 实现了AMD 和CommonJs的集成，本质上也是检测并适配。")]),s._v(" "),t("li",[s._v("ES6 增加了模块化方案，采用export + import 导出导入，还可以支持默认导出")])])])}),[],!1,null,null,null);t.default=r.exports}}]);