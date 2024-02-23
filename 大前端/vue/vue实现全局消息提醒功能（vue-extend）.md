## 1.需求背景
（1）在一般的管理系统或者H5应用中，需要交互反馈提醒。这种交互反馈，往往需要在多个组件中使用到，那么是否可以将其抽离出来，封装一个组件呢？答案是肯定的，我们可以根据日常的业务，对消息提醒功能进行封装，那么问题来了，如何实现一次注册，多次使用呢，关键时刻，vue.extend API就派上用场了

# 2. vue.extend（{组件选项}）的用法
（1）官方的解释是：**使用基础 Vue 构造器，创建一个“子类”**。参数是一个包含组件选项的对象。
按照我的理解是**extend**方法可以把一个组件选项作为参数，使用此方法，可以获得该组件的构造函数，然后通过new 方法创建一个组件出来。最后通过amount 方法挂载到对应的结点上。废话不多说，直接上代码。

```javascript
// 创建构造器
var Profile = Vue.extend({
  template: '<p>{{firstName}} {{lastName}} aka {{alias}}</p>',
  data: function () {
    return {
      firstName: 'Walter',
      lastName: 'White',
      alias: 'Heisenberg'
    }
  }
})
// 创建 Profile 实例，并挂载到一个元素上。
new Profile().$mount('#mount-point')
```
（2）**疑惑：这么方法何种场景适用？**
	解释一下，对比正常的组件挂载流程，需要我们在 **.vue**  文件中的**component**进行注册，然后在template文件中，编写相应的代码。
但很多时候，我们需要在组件之外的地方，使用到这个组件的一些api，比如在axios 拦截响应请求时，对异常消息提示，做出反馈，这个时候无法使用普通的组件注册方式调用消息提醒组件的api。因为这个是一个js文件，因此，通过这个**extend** API，提供了我们一个可以在.vue 文件之外，创建组件，并挂载，调用其api实现相应功能的能力。

## 3 封装消息提醒组件
```javascript
<template>
    <div class="toast" v-show="showToast">
        <div class="info" v-if="type == 'info'">{{ message }}</div>
        <div class="loading" v-if="type == 'loading'">
            <div class="circle">
                <div class="line" style="--line:1"></div>
                <div class="line" style="--line:2"></div>
                <div class="line" style="--line:3"></div>
            </div>
            <div class="message">{{ message }}</div>
        </div>
    </div>
</template>

<script>
export default {
    data() {
        return {
            message: "",
            duration: 3000,
            timer: null,
            type: "info",
            showToast: false,
            forbidClick: true,//加载时禁止点击
            lock: false,
        }
    },
    watch: {
        showToast(val) {
            if (val) {
                if (this.type == "info") {
                    this.startTime()
                } else {
                    clearTimeout(this.timer)
                    this.loading()
                }
            }
        }
    },
    methods: {
        startTime() {
            clearTimeout(this.timer)//之前的未关闭，需要清除，保障全局唯一性
            this.timer = setTimeout(() => {
                this.clear()
            }, this.duration)
        },
        clear() {
            this.showToast = false
            this.lock = false;
            this.lockClick()
        },
        loading() {
            this.lock = true
            this.lockClick();
        },
        lockClick() {
            if (this.lock && this.forbidClick) {
                document.body.classList.add('unclickable');
            } else {
                document.body.classList.remove('unclickable');
            }

        }
    }
}
</script>

<style lang="less">
:root {
  --dw: min(calc(100vw/750), 750px/750);
}
.px(@ww, @att) {
    @{att}: calc(@ww * var(--dw));
}

.padding(@top, @left, @att) {
    @{att}-top: calc(@top * var(--dw));
    @{att}-bottom: calc(@top * var(--dw));
    @{att}-left: calc(@left * var(--dw));
    @{att}-right: calc(@left * var(--dw));
}

.toast {
    position: fixed;
    left: 50%;
    top: 45%;
    transition: all .5s;
    transform: translateX(-50%) translateY(-50%);
    color: #FFF;
    text-align: center;
    background: rgba(17, 17, 17, 0.6);
    max-width: 80%;
    z-index: 9999;
    .px(200, min-width);
    .padding(16, 32, padding);
    .px(24, border-radius);
    .px(24, font-size);
}

.loading {
    min-height: calc(200*var(--dw));
    display: flex;
    flex-direction: column;
    justify-content: center;

    .circle {
        .line {
            display: inline-block;
            .px(15, width);
            .px(15, height);
            .px(15, border-radius);
            background-color: #FE0033;
            animation: loadingA 0.6s linear infinite;
            animation-delay: calc(0.1s*var(--line));
        }

    }

    .message {
        margin-top: calc(32*var(--dw));
        font-weight: 400;
        color: white;
    }

    @keyframes loadingA {
        0% {
            transform: translate(0, 0);
        }

        50% {
            transform: translate(0, calc(15*var(--dw)));
        }

        100% {
            transform: translate(0, 0);
        }
    }

}

.unclickable {
    overflow: hidden;

    * {
        pointer-events: none;
    }

}
</style>
```
  （1）组件提供两种类型消息，一种是普通的消息提醒 info，另外一种是loading加载提示。默认是info类型。
	（2）	在消息提醒没有消失的情况下，默认是不可点击页面的任何按钮。通过**pointer-events: none;** 控制
	（3）info消息提示默认显示是三秒，通过duration字段控制时长，loading加载是没有消失时间，如果没有手动关闭，则会一直显示。
	
## 4全局注册
toast 组件为上面封装的消息提醒组件。
```javascript
import toast from "./index.vue"

function install(Vue){
    const ToastConstructor = Vue.extend(toast);//使用基础 Vue 构造器，创建一个“子类 ，可以通过js语法实例化组件并挂载到对应地方
    const instance = new ToastConstructor();
    instance.$mount(document.createElement("div"));
    document.body.appendChild(instance.$el);
    Vue.prototype.$Toast = {
        info(message,duration=3000){
            instance.showToast = false;
            Vue.nextTick(()=>{
                instance.message = message;
                instance.duration = duration;
                instance.type = "info"
                instance.showToast = true
               
            })
        },
        loading(message){
            instance.showToast = false;
            Vue.nextTick(()=>{
                instance.message = message;
                instance.type = "loading"
                instance.showToast = true
               
            })
        },
        clear(){
            instance.clear()
        },
        
       
    }
}

export default install
```
（1）全局注册，主要通过把对应的方法挂载到vue的原型上，这样便可以实现任何组件可以使用到了。
接下来便是在main.js 中，进行操作。
initShowToast 为上面代码对外暴露的index脚本
```javascript
import initShowToast from "./views/components/toast/index"
initShowToast(Vue)
```
## 5 使用方式
（1）组件使用
直接通过this.\$toast 访问对应的api，this.\$toast 需要根据实际在vue原型挂载的命名来确定。我上面是Toast，因此需要对应。
```javascript
  getPop(id) {
            this.$Toast.loading("正在领取...")
            getCoupop({ stockId: id }).then(res => {
                console.log(res)
                //领取成功后，需要刷新
                this.refreshCoupon()
            }).catch(e => {
                console.log(e)
                this.$Toast.clear()
            })
        },
```
（2）axios拦截器使用
需要注意的是 js 文件无法通过this 访问到vue，因此需要以下方法才能实现调用。

```javascript
import Vue from 'vue'
import initShowToast from "../views/components/toast/index"
initShowToast(Vue)
const Toast = Vue.prototype.$Toast
//下面是使用示例

//loading加载与消息提醒关闭
if(config.showLoading==false){
        Toast.clear()
       }else{
        Toast.loading('加载中...');
    }
//普通消息提示
Toast.info(response.data.err_msg)
```

