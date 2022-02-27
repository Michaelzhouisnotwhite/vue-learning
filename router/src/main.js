import { createApp } from 'vue'
// import App from './App.vue'
import './index.css'
import 'bootstrap'
import 'bootstrap/dist/css/bootstrap.css'


import App from './components/guard-next/App.vue'
import router from './components/guard-next/router.js'

const app = createApp(App)

// 挂载路由模块
app.use(router)
app.mount('#app')
