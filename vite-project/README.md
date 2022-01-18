# vue

## 全局注册组件

在main.js里面导入组件，使用`app.component`进行绑定

```js
import Swiper from './components/globalReg/Swiper.vue'
import Test from './components/globalReg/Test.vue'


const app = createApp(App)

// 调用app.component全局注册组件
app.component('my-swiper', Swiper)
app.component('my-test', Test)
```

## 局部注册组件

在想要使用的组件位置使用：

```js
<template>
    <my-swiper></my-swiper>
</template>
import Swiper from ...
export default {
    components: {
        'my-swiper':Swiper
    }
}
```
