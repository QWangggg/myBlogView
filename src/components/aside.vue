<template>
    <div class="menu">
        <ul>
            <li v-for="(item, index) in menus" :key="index" class="li-style">
                <span @click="route(item)">{{item.name}}</span>
            </li>
        </ul>
    </div>
</template>

<script>
import { Loading } from "element-ui";
export default {
    data() {
        return {
            menus: [{ name: "HOME" }, { name: "LOGIN" }, { name: "REGISTER" }]
        };
    },
    created() {
        // 请求刷新后的路由，若含有cookie则将login替换为post
        // 有几个路由注意 '/' 'login' 'register'
        this.getMenus()
    },
    methods: {
        getMenus() {
            // 获取菜单项
            let loadingInstance = Loading.service({ fullscreen: true });
            this.$axios.get("api/auth/menu").then(res => {
                if (!res.data.success) return;
                this.menus = res.data.data.menus;
                if (res.data.data.username) {
                    localStorage.setItem('username', res.data.data.username)
                }
                loadingInstance.close();
            });
        },
        route(item) {
            if (item.name.toUpperCase() !== this.$route.name.toUpperCase()) {
                this.$router.push(item.name);
            }
        }
    },
    beforeRouteEnter (to, from, next) {
        console.log(from)
        next()
    }
};
</script>

<style lang="less">
.menu {
    padding-top: 80px;
    .li-style {
        padding-right: 30px;
        padding-bottom: 20px;
        span {
            cursor: pointer;
        }
    }
}
</style>