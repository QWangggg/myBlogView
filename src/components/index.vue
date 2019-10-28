<template>
    <el-container class="w">
        <el-aside width="160px">
            <Aside></Aside>
        </el-aside>
        <el-container>
            <el-header height="80px">
                <Header v-if="condition" :hidden-header="(value) => condition=value"></Header>
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
    data() {
        return {
            condition: false // header组件是否显示
        }
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
}
</style>