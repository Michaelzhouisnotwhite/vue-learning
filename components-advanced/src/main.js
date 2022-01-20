import { createApp } from 'vue'
// import App from './App.vue'
import './index.css'
import 'bootstrap'
import 'bootstrap/dist/css/bootstrap.css'

import MyApp from './components/network/App.vue'
import axios from 'axios'


const app = createApp(MyApp)

// 全局配置axios
axios.defaults.baseURL = "http://www.escook.cn"
app.config.globalProperties.$http = axios

app.mount('#app')
