<template>
    <div class="menu">
        <ul>
            <li v-for="(item, index) in menus" :key="index" class="li-style"><span @click="route(item)">{{item.name}}</span></li>
        </ul>
    </div>
</template>

<script>
export default {
    data() {
        return {
            menus: [{ name: "HOME" }, { name: "LOGIN" }, { name: "REGISTER" }]
        }
    },
    created(){
        
    },
    methods: {
        route(item) {
            if (item.name.toUpperCase() !== this.$route.name.toUpperCase()) {
                this.$router.push(item.name)
            }
        }
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