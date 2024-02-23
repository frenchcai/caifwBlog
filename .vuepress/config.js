module.exports = {
  title: "一旬博客空间",
  description: "微信搜索 [优趣知识星球]关注我，更多精彩内容早知道",
  cache: false,
  base: '/caifwBlogs/', // 使用相对路径，读取相对路径下的静态文件
  markdown: {
    // 开启代码块的行号
    lineNumbers: true,
    // 支持 4 级以上的标题渲染
    extractHeaders: ["h1", "h2", "h3", "h4", "h5", "h6"],
  },
  head:[
    ['meta', { name: 'referrer', content: 'no-referrer' }] // 设置页面关键字
  ],
  themeConfig: {
    nav: [
      {
        text: "gitee",
        link: "https://gitee.com/ten_days",
      },
      {
        text: "csdn",
        link: "https://blog.csdn.net/weixin_43011185?type=blog",
      },
      {
        text: "个人组件库vigo-ui",
        link: "https://gitee.com/ten_days/vigo-ui",
      },
    ],
    sidebar: {
      "/":[
        {title:"首页",path:"/"},
        {
          title:"大前端",
          path:"/大前端/",
          sidebarDepth: 3,
          children:[
            {
              title:"JavaScript基础",
              path:"/大前端/JavaScript基础/",
              collapse:true,
              children:[{
                title:"数据类型",
                path:"/大前端/JavaScript基础/数据类型"
              },
              {
                title:"循环语句",
                path:"/大前端/JavaScript基础/循环语句"
              },
              {
                title:"函数",
                path:"/大前端/JavaScript基础/JavaScript系列-函数"
              },
              {
                title:"函数调用",
                path:"/大前端/JavaScript基础/JavaScript系列-函数调用之apply、call、bind"
              },
              {
                title:"数组",
                path:"/大前端/JavaScript基础/JavaScript系列——数组、数组常用方法"
              },
              {
                title:"原型链",
                path:"/大前端/JavaScript基础/JavaScript系列——原型、原型链、继承"
              },
              {
                title:"闭包",
                path:"/大前端/JavaScript基础/JavaScript系列——闭包"
              },
              {
                title:"this",
                path:"/大前端/JavaScript基础/JavaScript系列——this指向"
              },
              {
                title:"正则表达式",
                path:"/大前端/JavaScript基础/JavaScript系列——正则表达式"
              },
              {
                title:"同步与异步",
                path:"/大前端/JavaScript基础/JavaScript系列——同步与异步"
              },
              {
                title:"Promise",
                path:"/大前端/JavaScript基础/JavaScript系列——Promise"
              },
              {
                title:"Generator",
                path:"/大前端/JavaScript基础/JavaScript系列——Generator"
              },
              {
                title:"Proxy（代理）",
                path:"/大前端/JavaScript基础/JavaScript系列——Proxy（代理）"
              },
            ]
            },
            {
              title:"浏览器",
              path:"/大前端/浏览器/",
              children:[{
                title:"渲染、回流与重绘",
                path:"/大前端/浏览器/渲染、回流与重绘"
              },
              {
                title:"浏览器缓存机制",
                path:"/大前端/浏览器/HTTP缓存机制与webpack打包优化"
              },
            
            ],
            },
            {
              title:"开发实战",
              path:"/大前端/开发实战/",
              children:[{
                title:"网络http、https",
                path:"/大前端/开发实战/网络"
              },
              {
                title:"网络攻击与防御",
                path:"/大前端/开发实战/前端开发实战基础——网络攻击与防御"
              },
              {
                title:"模块化开发",
                path:"/大前端/开发实战/前端开发实战基础——模块"
              }
            ],
            },
            {
              title:"微信小程序",
              path:"/大前端/微信小程序/",
              children:[
                {
                  title:"小程序中查询与显示数据",
                  path:"/大前端/微信小程序/小程序中查询与显示数据"
                },
                {
                  title:"小程序中的单选按钮逻辑与复选按钮",
                  path:"/大前端/微信小程序/小程序中的单选按钮逻辑与复选按钮"
                },
                {
                  title:"小程序中表单向云数据库存放数据",
                  path:"/大前端/微信小程序/小程序中表单向云数据库存放数据"
                },
                {
                  title:"微信公众号服务器配置",
                  path:"/大前端/微信小程序/微信公众号服务器配置"
                },
                {
                  title:"微信小程序中点击收藏类似功能",
                  path:"/大前端/微信小程序/微信小程序中点击收藏类似功能"
                },
                {
                  title:"微信小程序中的Flex",
                  path:"/大前端/微信小程序/微信小程序中的Flex"
                },
                {
                  title:"微信小程序开发",
                  path:"/大前端/微信小程序/微信小程序开发"
                },
                {
                  title:"微信小程序数据渲染",
                  path:"/大前端/微信小程序/微信小程序数据渲染"
                },
                {
                  title:"微信小程序获取openid",
                  path:"/大前端/微信小程序/微信小程序获取openid"
                },
                {
                  title:"浅谈微信小程序中的授权",
                  path:"/大前端/微信小程序/浅谈微信小程序中的授权"
                }
              ]
            },
            {
              title:"移动端开发",
              path:"/大前端/移动端开发/",
              children:[
                {
                  title:"flutter导航项目demo",
                  path:"/大前端/移动端开发/flutter导航项目demo"
                },
                {
                  title:"flutter网络请求",
                  path:"/大前端/移动端开发/flutter网络请求"
                }
              ]

            },
            {
              title:"react",
              path:"/大前端/react/",
              children:[
                {
                  title:"从0到1搭建react 工程化前端项目",
                  path:"/大前端/react/从0到1搭建react 工程化前端项目"
                }
              ]
            },
            {
              title:"vue",
              path:"/大前端/vue/",
              children:[
                {
                  title:"vue-Mixis的理解与应用",
                  path:"/大前端/vue/vue-Mixis的理解与应用"
                },
                {
                  title:"vue-router 在没有用户交互情况下，执行push ，无法返回上一个页面？",
                  path:"/大前端/vue/vue-router 在没有用户交互情况下，执行push ，无法返回上一个页面？"
                },
                {
                  title:"vue2 框架运行原理剖析系列（一）",
                  path:"/大前端/vue/vue2 框架运行原理剖析系列（一）之 new Vue()实例化过程到底做了什么！！！"
                },
                {
                  title:"vue2 框架运行原理剖析系列（二）",
                  path:"/大前端/vue/vue2 框架运行原理剖析系列（二）之 组件挂载$mount神秘之旅！！！"
                },
                {
                  title:"vue-Mixis的理解与应用",
                  path:"/大前端/vue/vue-Mixis的理解与应用"
                },
                {
                  title:"vue3系列--reactive实现细节",
                  path:"/大前端/vue/vue3系列--reactive实现细节"
                },
                {
                  title:"vue实现全局消息提醒功能（vue-extend）",
                  path:"/大前端/vue/vue实现全局消息提醒功能（vue-extend）"
                },
                {
                  title:"vue常用指令大全（含比较）",
                  path:"/大前端/vue/vue常用指令大全（含比较）"
                },
                {
                  title:"vue组件data是一个函数的原理",
                  path:"/大前端/vue/vue组件data是一个函数的原理"
                },
                {
                  title:"终于把 vue-router 运行原理讲明白了（一）！！！",
                  path:"/大前端/vue/终于把 vue-router 运行原理讲明白了（一）！！！"
                },
                {
                  title:"终于把 vue-router 运行原理讲明白了（二）！！！",
                  path:"/大前端/vue/终于把 vue-router 运行原理讲明白了（二）！！！"
                }
              ]
            }
          ]
        },
        {
          title:"后端",
          path:"/后端/",
          sidebarDepth: 3,
          children:[
            {
              title:"Java",
              path:"/后端/Java/",
              children:[
                {
                  title:"java多线程的中死锁与解锁、显示lock和隐式synchronize同步锁",
                  path:"/后端/Java/java多线程的中死锁与解锁、显示lock和隐式synchronize同步锁"
                },
                {
                  title:"java多线程中的线程通信问题（生产者与消费者模式）",
                  path:"/后端/Java/java多线程中的线程通信问题（生产者与消费者模式）"
                },
                {
                  title:"java线程的休眠(sleep)、礼让(yield)、插队（join）",
                  path:"/后端/Java/java线程的休眠(sleep)、礼让(yield)、插队（join）"
                },
                {
                  title:"java中创建线程的三种方法（继承Thread类、继承Runable接口和使用callable接口）",
                  path:"/后端/Java/java中创建线程的三种方法（继承Thread类、继承Runable接口和使用callable接口）"
                },
                {
                  title:"java中线程同步（synchronized的用法）",
                  path:"/后端/Java/java中线程同步（synchronized的用法）"
                },
                {
                  title:"List在session的大用处",
                  path:"/后端/Java/List在session的大用处"
                },
              ]
            },
            {
              title:"Python",
              path:"/后端/Python/",
              children:[
                {
                  title:"python 通过网站API、静态网页获取数据",
                  path:"/后端/Python/python 通过网站API、静态网页获取数据"
                },
                {
                  title:"python爬取新浪微博热门话题保存到excel等文件",
                  path:"/后端/Python/python爬取新浪微博热门话题保存到excel等文件"
                },
                {
                  title:"python实现多篇word文档整篇文章逐段截取句子",
                  path:"/后端/Python/python实现多篇word文档整篇文章逐段截取句子"
                },
                {
                  title:"python实现某csdn关键词搜索结果（含连接和标签-可以修改后访问文章）",
                  path:"/后端/Python/python实现某csdn关键词搜索结果（含连接和标签-可以修改后访问文章）"
                },
                {
                  title:"python实现爬取知乎关键词搜索结果",
                  path:"/后端/Python/python实现爬取知乎关键词搜索结果"
                },
                {
                  title:"python数据交换——SQLite3、csv、DataFrame、mysql、excel之间的转换",
                  path:"/后端/Python/python数据交换——SQLite3、csv、DataFrame、mysql、excel之间的转换"
                },
                {
                  title:"python中json对象与内置dict转换",
                  path:"/后端/Python/python中json对象与内置dict转换"
                },
            ]
            },
            // {
            //   title:"数据库",
            //   path:"/后端/数据库/"
            // }
          ]
        },
        {
          title:"组件库",
          path:"/组件库/",
          sidebarDepth: 3,
        },
        {
          title:"公众号",
          path:"/公众号/",
          sidebarDepth: 3,
        }
      ],
    },
  },
};
