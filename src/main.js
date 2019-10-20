import Vue from 'vue'
import App from './App.vue'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
import axios from 'axios'
import router from './router/router'

// markdown编辑器
import mavonEditor from 'mavon-editor'
import 'mavon-editor/dist/css/index.css'
Vue.use(mavonEditor)

Vue.config.productionTip = false
Vue.prototype.$axios = axios
Vue.use(ElementUI, { size: 'small', zIndex: 3000 })

axios.interceptors.request.use(config => {
    // 在发送请求之前做些什么
    return config
})


axios.interceptors.response.use(response => { // 响应拦截
    switch (response.data.code) {
        case '200':
            return response
        case '501':
            Vue.prototype.$message.error(response.data.error)
            router.push('/login')
            break;
    }
})

new Vue({
    el: '#app',
    router,
    render: h => h(App)
})