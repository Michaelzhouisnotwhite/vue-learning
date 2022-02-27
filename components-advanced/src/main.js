import { createApp } from 'vue'
// import App from './App.vue'
import './index.css'
import 'bootstrap'
import 'bootstrap/dist/css/bootstrap.css'

import MyApp from './components/directive/App.vue'
import axios from 'axios'


const app = createApp(MyApp)

// 全局配置axios
axios.defaults.baseURL = "http://www.escook.cn"
app.config.globalProperties.$http = axios

// 生命全局自定义属性
app.directive('focus', {
    mounted(el) {
        el.focus()
    },
    updated(el) {
        el.focus()
    }
})
app.directive('color', (el, binding) => {
    el.style.color = binding.value
})

app.mount('#app')
