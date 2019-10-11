<template>
    <div class="register">
        <el-form :model="user" label-width="80px">
            <el-form-item
                class="user-input"
                label="用户名"
                prop="username"
                :rules="[{ required: true, message: '用户名不能为空' }]"
            >
                <el-input type="username" v-model="user.username" autocomplete="off"></el-input>
            </el-form-item>
            <el-form-item
                class="user-input"
                label="密码"
                prop="password"
                :rules="[{ required: true, message: '密码不能为空' }]"
            >
                <el-input type="password" v-model="user.password" autocomplete="off"></el-input>
            </el-form-item>
            <el-form-item
                class="user-input"
                label="确认密码"
                prop="confirmPassword"
                :rules="[{ required: true, message: '确认密码不能为空' }]"
            >
                <el-input type="password" v-model="user.confirmPassword" autocomplete="off"></el-input>
            </el-form-item>
            <el-form-item
                class="user-input"
                label="邮箱"
                prop="email"
                :rules="[{ required: true, message: '邮箱不能为空' }]"
            >
                <el-input type="email" v-model="user.email" autocomplete="off"></el-input>
            </el-form-item>
            <el-form-item>
                <el-button type="primary" @click="register">注册</el-button>
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
                password: "",
                confirmPassword: "",
                email: ""
            }
        };
    },
    methods: {
        register() {
            this.$axios.post("api/auth/register", this.user).then(res => {
                if (!res.data.success) return alert(res.data.data);
                this.$router.push("/login");
            });
        }
    }
};
</script>

<style lang="less">
.login {
    .user-input {
        text-align: left;
        .el-input {
            min-width: 16rem;
        }
    }
}
</style>
