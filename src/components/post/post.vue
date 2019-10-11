<template>
    <div class="article">
        <header>
            标题：
            <el-input v-model="post.title"></el-input>
        </header>
        <div class="content">
            正文：
            <el-input type="textarea" v-model="post.content" name="" id="" cols="30" rows="10"></el-input>
        </div>
        <div class="footer">
            <el-button>预览</el-button>
            <el-button @click="submit">发表</el-button>
        </div>
    </div>
</template>

<script>
export default {
    data() {
        return {
            post: {
                title: '',
                content: ''
            }
        }
    },
    methods: {
        submit() {
            this.post.name = localStorage.getItem('username')
            this.$axios.post('/api/post', this.post).then(res => {
                if (!res.data.success) return
                this.$message.success(res.data.data)
                this.$router.push('/')
            })
        }
    }
}
</script>

<style lang="less">
    .article {
        text-align: left;
        .footer {
            margin-top: 10px;
            text-align: center;
        }
    }
</style>