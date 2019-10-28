<template>
    <div class="header" align="left">
        <span>{{title}}</span>
    </div>
</template>

<script>
export default {
    data() {
        return {
            title: "主页"
        }
    },
    created(){
        if (this.$route.meta && this.$route.meta.title) {
            this.title = this.$route.meta.title
        } else {
            this.$emit('hidden-header', true)
        }
    },
    watch: {
        $route(newV) {
            this.title = newV.meta.title
        }
    }
};
</script>

<style lang="less">
.header {
    padding-top: 30px;
    font-size: 30px;
    font-weight: 700;
    line-height: 30px;
    position: relative;
    &::after {
        content: "";
        display: block;
        position: absolute;
        bottom: -16px;
        width: 100%;
        height: 1px;
        background-color: #ccc;
    }
}
</style>