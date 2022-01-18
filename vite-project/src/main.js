import { createApp } from 'vue'
import App from './App.vue'

import 'bootstrap';
// import 'bootstrap/js/dist/util';
// import 'bootstrap/js/dist/alert';
import './index.css'
import Swiper from './components/globalReg/Swiper.vue'
import Test from './components/globalReg/Test.vue'


const app = createApp(App)

// 调用app.component全局注册组件
app.component('my-swiper', Swiper)
app.component('my-test', Test)

app.mount('#app')
