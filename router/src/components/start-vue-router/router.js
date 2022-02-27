import { createRouter, createWebHashHistory } from 'vue-router'
import MyHome from "./MyHome.vue";
import MyMovie from "./MyMovie.vue";
import MyAbout from "./MyAbout.vue";

const router = createRouter({
    // 指定路由的工作模式
    history: createWebHashHistory(),

    // 指定高亮类名
    linkActiveClass:"active-router",
    // 指定路由的配置规则
    routes: [
        { path: '/', redirect: '/home' },
        { path: '/home', component: MyHome, },
        { path: '/movie', component: MyMovie },
        { path: '/about', component: MyAbout },
    ]
})

export default router