import { createRouter, createWebHashHistory } from 'vue-router'
import MyHome from "./Home.vue";
import MyMain from "./Main.vue";
import MyLogin from "./Login.vue";

const router = createRouter({
    // 指定路由的工作模式
    history: createWebHashHistory(),

    // 指定高亮类名
    linkActiveClass: "active-router",
    // 指定路由的配置规则
    routes: [
        { path: '/', redirect: '/home' },
        { path: '/home', component: MyHome, },
        { path: '/main', component: MyMain },
        { path: '/login', component: MyLogin },
    ]
})
router.beforeEach((to, from, next) => {
    const token = localStorage.getItem('token')
    console.log(token)
    // 如果token不存在就登录
    if (to.path === '/main' && !token) {
        // 证明用户访问的是后台主页
        next('/login')
    } else {
        next() // 调用next函数表示允许用户访问每一个路由
    }
})
export default router