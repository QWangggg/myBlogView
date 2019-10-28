<template>
    <div class="article-box">
        <h1 class="title">{{ article.title }}</h1>
        <div class="info">
            <span class="author">
                作者:
                <i style="color:#F56C6C;">{{article.name}}</i> |
            </span>
            <span class="posttime">{{ article.time }}</span>
        </div>
        <div class="content markdown-body" v-html="article.content"></div>
    </div>
</template>

<script>
export default {
    data() {
        return {
            article: {}, // 文章
            aritcleId: this.$route.params.id, //文章id
            getArticleUrl: "/api/auth/article", // 获取文章
        }
    },
    created(){
        this.getArticle()
    },
    methods: {
        getArticle() {
            this.$axios.get(this.getArticleUrl + this.aritcleId).then(res => {
                if (!res.data.success) return
                this.article = res.data.data
                console.log(this.article)
            })
        }
    }
};
</script> 
<style lang="less">
.article-box {
    text-align: left;
    .title {
        font-size: 2em;
        font-weight: 700;
        padding-bottom: 5px;
    }
    .info {
        padding-bottom: 5px;
        font-size: 12px;
        color: #999;
    }
}
</style>