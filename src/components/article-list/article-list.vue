<template>
    <div class="article-summary-list">
        <div v-for="(item, index) in list" :key="index" class="item-box">
            <h1 class="title" @click="openArticle(item)">{{ item.title }}</h1>
            <div class="info">
                <span class="author">
                    作者:
                    <i style="color:#F56C6C;">{{item.name}}</i> |
                </span>
                <span class="posttime">{{ item.time }}</span>
            </div>
            <div class="content markdown-body" v-html="item.content"></div>
        </div>
    </div>
</template>

<script>
import moment from 'moment'
export default {
    data() {
        return {
            list: [],
            getAllArticles: "/api/auth/articles"
        };
    },
    created() {
        this.getLists();
    },
    methods: {
        // 获取文章列表
        getLists() {
            this.$axios.get(this.getAllArticles).then(res => {
                if (!res.data.success) return;
                this.list = res.data.data;
                this.list.forEach(item => {
                    item.time = moment(item.time).format('YYYY-MM-DD HH:mm:ss')
                })
            });
        },
        openArticle(item) {
            console.log(item._id)
            // 打开文章
            this.$router.push({name: 'article', params: {id: item._id}})
        }
    }
};
</script>

<style lang="less">
.article-summary-list {
    text-align: left;
    .item-box {
        margin-bottom: 10px;
        .title {
            font-size: 2em;
            font-weight: 700;
            padding-bottom: 5px;
            cursor: pointer;
        }
        .info {
            padding-bottom: 5px;
            font-size: 12px;
            color: #999;
        }
    }
}
</style>