import { createApp } from 'vue'
// import App from './App.vue'

import 'bootstrap';
import 'jquery'
import "bootstrap/dist/css/bootstrap.min.css"
// import 'bootstrap/js/dist/util';
// import 'bootstrap/js/dist/alert';
import './index.css'
import Swiper from './components/globalReg/Swiper.vue'
import Test from './components/globalReg/Test.vue'

import App from './components/v-model/App.vue'


const app = createApp(App)

// 调用app.component全局注册组件
app.component(Swiper.name, Swiper)
app.component(Test.name, Test)

app.mount('#app')
