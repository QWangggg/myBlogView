<template>
    <div class="article">
        <header>{{ title }}</header>
        <div class="info">
            <span class="author">作者:<i style="color:#F56C6C;">{{author}}</i> | </span>
            <span class="posttime">{{ postTime }}</span>
        </div>
        <div class="content" v-html="content">
        </div>
    </div>
</template>

<script>
export default {
    data() {
        return {
            title: '你曾是少年',
            author: '佚名',
            postTime: '2019-10-07 15:56',
            content: '许多年前，你有一双清澈的双眼。'
        }
    }
}
</script>

<style lang="less">
    .article {
        .info {
            
        }
    }
</style>