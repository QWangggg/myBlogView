import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [{
    path: '/',
    name: 'HOME',
    meta: {
        title: '主页'
    },
    component: () =>
        import ('@/components/index'),
    hidden: true,
    children: [{
        path: '/login',
        name: 'login',
        meta: {
            title: '登录'
        },
        component: () =>
            import ('@/components/login'),
        hidden: true
    }, {
        path: '/register',
        name: 'register',
        meta: {
            title: '注册'
        },
        component: () =>
            import ('@/components/register'),
        hidden: true
    }, ]
}, {
    path: '/HOME',
    hidden: true,
    redirect: '/'
}]

const router = new VueRouter({
    routes
})

export default router