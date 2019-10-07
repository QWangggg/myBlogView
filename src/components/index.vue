<template>
    <el-container class="w">
        <el-aside width="160px">
            <Aside></Aside>
        </el-aside>
        <el-container>
            <el-header height="80px">
                <Header></Header>
            </el-header>
            <el-main>
                <router-view></router-view>
            </el-main>
        </el-container>
    </el-container>
</template>

<script>
import Header from "./header"
import Aside from './aside'
export default {
    components: {
        Header,
        Aside
    },
    created() {
        },
};
</script>

<style lang="less">
.el-header,
.el-footer {
    color: #333;
    text-align: center;
    line-height: 80px;
}

.el-aside {
    color: #333;
    text-align: right;
}

.el-main {
    color: #333;
    margin: 0 auto;
}
</style>