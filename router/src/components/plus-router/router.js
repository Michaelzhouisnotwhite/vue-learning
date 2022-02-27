import { createRouter, createWebHashHistory } from 'vue-router'
import MyHome from "./MyHome.vue";
import MyMovie from "./MyMovie.vue";
import MyAbout from "./MyAbout.vue";
import Tab1 from "./tabs/MyTab1.vue";
import Tab2 from "./tabs/MyTab2.vue";

const router = createRouter({
    // 指定路由的工作模式
    history: createWebHashHistory(),

    // 指定高亮类名
    linkActiveClass: "active-router",
    // 指定路由的配置规则
    routes: [
        { path: '/', redirect: '/home' },
        { path: '/home', component: MyHome, },
        {
            path: '/movie/:id',
            component: MyMovie,
            props: true,
            name: 'mov'
        },
        {
            path: '/about',
            component: MyAbout,
            redirect: '/about/tab1',
            children: [
                { path: "tab1", component: Tab1 },
                { path: 'tab2', component: Tab2 }
            ],

        }
    ]
})

// 声明全局导航守卫
router.beforeEach((to, from)=>{
    // to 目标路由对象
    // from 当前导航正要离开的路由对象
    // next 是一个函数，表示放行
    console.log(from)
})
export default router