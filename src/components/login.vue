<template>
    <div class="login">
        <el-form :model="user" label-width="70px">
            <el-form-item class="user-input"
                label="用户名"
                prop="username"
                :rules="[{ required: true, message: '密码不能为空' }]"
            >
                <el-input  type="username" v-model="user.username" autocomplete="off"></el-input>
            </el-form-item>
            <el-form-item class="user-input"
                label="密码"
                prop="password"
                :rules="[{ required: true, message: '密码不能为空' }]"
            >
                <el-input  type="password" v-model="user.password" autocomplete="off"></el-input>
            </el-form-item>
            <el-form-item>
                <el-button type="primary" @click="login">登录</el-button>
            </el-form-item>
        </el-form>
    </div>
</template>
<script>
export default {
    data() {
        return {
            user: {
                username: "",
                password: ""
            }
        };
    },
    methods: {
        login() {
            this.$axios.post("/api/auth/login", this.user).then(res => {
                if (!res.data.success)
                    return this.$message.error(res.data.data);
                this.$message.success('登录成功')
                this.$router.push("/");
                // window.location.reload()
            });
        }
    }
};
</script>
<style lang="less" scoped>
.login {
    .user-input {
        text-align: left;
        .el-input {
            min-width: 16rem;
        }
    }
}
</style>
