# 开发指南

vigo-ui 组件库，是基于工作中，借鉴 elementUI、实战开发中沉淀的组件库，基于 vue3 开发，现提供 button、dialog、icon 组件，后续将持续提供更多功能组件，敬请期待

## 安装

### npm 安装

```sh
npm i vigo-ui-caifw
```

## 快速上手

### 引入 vigo-ui 组件库

#### 完整引入

在 main.js 中写入以下的内容（vue3）

```javascript
import { createApp } from "vue";
import vgUI from "vigo-ui-caifw";
import "vigo-ui-caifw/lib/vigo-ui-caifw.css";
import App from "./App.vue";
createApp(App).use(vgUI).mount("#app");
```

上面引入，将会全局注册 vigo-ui 组件，无需再使用 component 注册

# 组件

## button

### 基础用法

基础的按钮用法。
使用`type`、`plain`、`round`和`circle`属性来定义

```html
<vg-button>普通按钮</vg-button>
<vg-button type="primary">首要按钮</vg-button>
<vg-button type="success">成功按钮</vg-button>
<vg-button type="warning">警告按钮</vg-button>
<vg-button type="danger">危险按钮</vg-button>
<vg-button type="info">信息按钮</vg-button>
<vg-button type="strict">严肃按钮</vg-button>

<vg-button type="primary" :plain="true">首要按钮</vg-button>
<vg-button type="success" :plain="true">成功按钮</vg-button>
<vg-button type="warning" :plain="true">警告按钮</vg-button>
<vg-button type="danger" :plain="true">危险按钮</vg-button>
<vg-button type="info" :plain="true">信息按钮</vg-button>
<vg-button type="strict" :plain="true">严肃按钮</vg-button>

<vg-button :plain="false" :round="true">圆角按钮</vg-button>
<vg-button type="primary" :plain="false" :round="true">首要按钮</vg-button>
<vg-button type="success" :plain="true" :round="true">成功按钮</vg-button>
<vg-button type="warning" :plain="false" :round="true">警告按钮</vg-button>
<vg-button type="danger" :plain="false" :round="true">危险按钮</vg-button>
<vg-button type="info" :plain="false" :round="true">信息按钮</vg-button>
<vg-button type="strict" :plain="false" :round="true">严肃按钮</vg-button>
```

![button 1](/../images/components/button/b1.png)

### 禁用状态

按钮不可用状态。

你可以使用`disabled`属性来定义按钮是否可用，它接受一个`Boolean`值。

```html
<vg-button :disabled="true" :plain="true">禁用按钮</vg-button>
<vg-button type="primary" :disabled="true">首要按钮</vg-button>
<vg-button type="success" :disabled="true">成功按钮</vg-button>
<vg-button type="warning" :disabled="true">警告按钮</vg-button>
<vg-button type="danger" :disabled="true">危险按钮</vg-button>
<vg-button type="info" :disabled="true">信息按钮</vg-button>
<vg-button type="strict" :disabled="true">严肃按钮</vg-button>

<vg-button :disabled="true" :plain="true">禁用朴素</vg-button>
<vg-button type="primary" :disabled="true" :plain="true">首要按钮</vg-button>
<vg-button type="success" :disabled="true" :plain="true">成功按钮</vg-button>
<vg-button type="warning" :disabled="true" :plain="true">警告按钮</vg-button>
<vg-button type="danger" :disabled="true" :plain="true">危险按钮</vg-button>
<vg-button type="info" :disabled="true" :plain="true">信息按钮</vg-button>
<vg-button type="strict" :disabled="true" :plain="true">严肃按钮</vg-button>
```

![button 1](/../images/components/button/b2.png)

### 图标按钮

带图标的按钮可增强辨识度（有文字）或节省空间（无文字）。

```html
<vg-button type="info" icon="vg-icon-loading">信息按钮</vg-button>
<vg-button type="strict" icon="vg-icon-delete">严肃按钮</vg-button>
```

![button 1](/../images/components/button/b3.png)

### 加载中

点击按钮后进行数据加载操作，在按钮上显示加载状态。
要设置为 loading 状态，只要设置`loading`属性为`true`即可。

```html
<vg-button :loading="true">普通按钮</vg-button>
<vg-button type="primary" :loading="true">首要按钮</vg-button>
<vg-button type="success" :loading="true">成功按钮</vg-button>
<vg-button type="warning" :loading="true">警告按钮</vg-button>
<vg-button type="danger" :loading="true">危险按钮</vg-button>
<vg-button type="info" :loading="true">信息按钮</vg-button>
```

![button 1](/../images/components/button/b5.png)

### 不同尺寸

Button 组件提供除了默认值以外的三种尺寸，可以在不同场景下选择合适的按钮尺寸
额外的尺寸：`medium`、`small`、`mini`，通过设置`size`属性来配置它们。

```html
<vg-button type="success" size="mini">超小按钮</vg-button>
<vg-button size="small">小按钮</vg-button>
<vg-button type="success">默认按钮</vg-button>
<vg-button type="primary" size="medium">中型按钮</vg-button>
<vg-button type="success" size="large">大型按钮</vg-button>
```

![button 1](/../images/components/button/b4.png)

### Attributes

| 参数     | 说明                                            | 类型    | 可选值                                      | 默认值 |
| -------- | ----------------------------------------------- | ------- | ------------------------------------------- | ------ |
| size     | 尺寸                                            | string  | large/ medium / small / mini                       | —      |
| type     | 类型                                            | string  | primary / success / warning / danger / info | —      |
| plain    | 是否朴素按钮                                    | boolean | —                                           | false  |
| round    | 是否圆角按钮                                    | boolean | —                                           | false  |
| circle   | 是否圆形按钮                                    | boolean | —                                           | false  |
| loading  | 是否加载中状态                                  | boolean | —                                           | false  |
| disabled | 是否禁用状态                                    | boolean | —                                           | false  |
| icon     | 图标类名,以 vg-icon-类型出现，如 vg-icon-delete | string  | —                                           | —      |
| block     | 是否以块状形式显示 | boolean  | —                                           | —      |false|

## dialog

Dialog 弹出一个对话框，适合需要自定义内容框架的场景。
需要设置`visible`属性，它接收`Boolean`，当为`true`时显示 Dialog。Dialog 分为两个部分：`body`和`footer`，`footer`需要具名为`footer`的`slot`。`title`属性用于定义标题，它是可选的，默认值为空。

```html
<template>
  <button @click="open">打开弹窗</button>

  <vg-dialog v-model="visible">
    <div>我是弹出窗</div>
    <template v-slot:footer>
      <div class="btnList">
        <vg-button type="info" @click="close" size="mini">取消</vg-button>
        <vg-button type="primary" size="mini">确认</vg-button>
      </div>
    </template>
  </vg-dialog>
</template>

<script>
  import { defineComponent, ref } from "vue";
  export default defineComponent({
    components: { vgDialog, vgButton },
    setup() {
      const visible = ref(false);
      function open() {
        visible.value = !visible.value;
      }
      return {
        visible,
        open,
      };
    },
  });
</script>
```

![button 1](/../images/components/dialog/d1.png)

### 居中布局

标题和底部可水平居中
将`center`设置为`true`即可使标题和底部居中。`center`仅影响标题和底部区域。Dialog 的内容是任意的，在一些情况下，内容并不适合居中布局。如果需要内容也水平居中，请自行为其添加 CSS。

```html
<template>
  <button @click="open">打开弹窗</button>

  <vg-dialog v-model="visible" :center="true">
    <div>我是弹出窗</div>
    <template v-slot:footer>
      <div class="btnList">
        <vg-button type="info" @click="close2" size="mini">取消</vg-button>
        <vg-button type="primary" size="mini">确认</vg-button>
      </div>
    </template>
  </vg-dialog>
</template>

<script>
  import { defineComponent, ref } from "vue";
  export default defineComponent({
    components: { vgDialog, vgButton },
    setup() {
      const visible = ref(false);
      function open() {
        visible.value = !visible.value;
      }
      return {
        visible,
        open,
      };
    },
  });
</script>
```

![button 1](/../images/components/dialog/d2.png)

### 自定义高度和宽度

dialog 默认宽度是 50%，相对高度是 15vh，可以通过 width 和 top 修改

```html
<template>
  <button @click="open">打开弹窗</button>

  <vg-dialog v-model="visible" width="60%" top="25vh">
    <div>我是弹出窗</div>
    <template v-slot:footer>
      <div class="btnList">
        <vg-button type="info" @click="close" size="mini">取消</vg-button>
        <vg-button type="primary" size="mini">确认</vg-button>
      </div>
    </template>
  </vg-dialog>
</template>

<script>
  import { defineComponent, ref } from "vue";
  export default defineComponent({
    components: { vgDialog, vgButton },
    setup() {
      const visible = ref(false);
      function open() {
        visible.value = !visible.value;
      }
      return {
        visible,
        open,
      };
    },
  });
</script>
```

![button 1](/../images/components/dialog/d3.png)

### Attributes
| 参数      | 说明          | 类型      | 可选值                           | 默认值  |
|---------- |-------------- |---------- |--------------------------------  |-------- |
| visible   | 是否显示 Dialog，支持 .sync 修饰符 | boolean | — | false |
| title     | Dialog 的标题，也可通过具名 slot （见下表）传入 | string    | — | — |
| width     | Dialog 的宽度 | string    | — | 50% |
| top       | Dialog CSS 中的 margin-top 值 | string | — | 15vh |


## icon

提供了一套常用的图标集合。

直接通过设置属性 name 来使用即可。例如：

```html
<vg-icon name="loading"></vg-icon>
<vg-icon name="home"></vg-icon>
<vg-icon name="arrow-right"></vg-icon>
```


除此之外，我们提供了以下的icon 供大家使用
![button 1](/../images/components/icon/i1.png)
![button 1](/../images/components/icon/i2.png)
![button 1](/../images/components/icon/i3.png)
![button 1](/../images/components/icon/i4.png)
![button 1](/../images/components/icon/i5.png)