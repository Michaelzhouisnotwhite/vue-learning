import { createApp } from 'vue'
import MyApp from './App.vue'
import './index.css'
import 'bootstrap'
import 'bootstrap/dist/css/bootstrap.css'
import axios from 'axios'

const app = createApp(MyApp)

axios.defaults.baseURL = "https://www.escook.cn"
app.config.globalProperties.$http = axios

app.mount('#app')
