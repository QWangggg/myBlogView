<template>
    <div class="article">
        <header>
            标题：
            <el-input v-model="post.title"></el-input>
        </header>
        <div class="content">
            正文：
            <mavon-editor
                v-model="post.content"
                :ishljs="true"
                ref="md"
                @imgAdd="imgAdd"
                @imgDel="imgDel"
            ></mavon-editor>
            <!-- https://github.com/hinesboy/mavonEditor/blob/master/doc/cn/upload-images.md -->
        </div>
        <div class="footer">
            <el-button @click="submit" :disabled="uploadImgNow">发表</el-button>
        </div>
    </div>
</template>

<script>
export default {
    data() {
        return {
            post: {
                title: "",
                content: ""
            },
            img_file: [],
            uploadImgNow: false
        };
    },
    methods: {
        submit() {
            this.post.name = localStorage.getItem("username");
            this.$axios.post("/api/post", this.post).then(res => {
                if (!res.data.success) return;
                this.$message.success(res.data.data);
                this.$router.push("/");
            });
        },
        imgDel(pos) {
            delete this.img_file[pos];
        },
        imgAdd(pos, $file) {
            // formdata直接打印是{},需要使用getAll等方法取值
            // 第一步.将图片上传到服务器.
            var formdata = new FormData();
            formdata.append("image", $file);
            this.uploadImgNow = true;
            this.$axios.post("/api/upload", formdata, {headers: { "Content-Type": "multipart / form-data" }})
                .then(url => {
                    // 第二步.将返回的url替换到文本原位置![...](0) -> ![...](url)
                    // $vm.$img2Url 详情见本页末尾
                    this.$refs.md.$img2Url(pos, url);
                })
                .finally(() => {
                    this.uploadImgNow = false;
                });
        }
    }
};
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