<template>
    <div class="article-summary-list">
        <div v-for="(item, index) in list" :key="index" class="item-box">
            <h1 class="title">{{ item.title }}</h1>
            <div class="info">
                <span class="author">
                    作者:
                    <i style="color:#F56C6C;">{{item.name}}</i> |
                </span>
                <span class="posttime">{{ item.time }}</span>
            </div>
            <div class="content" v-html="item.content"></div>
        </div>
    </div>
</template>

<script>
export default {
    data() {
        return {
            list: []
        };
    },
    created() {
        this.getLists();
    },
    methods: {
        // 获取文章列表
        getLists() {
            this.$axios.get("/api/auth/articles").then(res => {
                if (!res.data.success) return;
                this.list = res.data.data;
            });
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
            font-size: 20px;
            padding-bottom: 5px;
        }
        .info {
            padding-bottom: 5px;
            font-size: 12px;
            color: #999;
        }
    }
}
</style>