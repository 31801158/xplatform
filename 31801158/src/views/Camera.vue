<template>
    <div class="camera">
        <van-nav-bar title="图片识别" color="#f00"/>
        <van-uploader v-model="fileList" multiple :after-read="afterRead"/>
        <div style="border: 1px dashed lightgrey; width: 90%;margin: 5px auto;"> </div>

        <p class="title">识别结果</p>
        <div style="width: 90%;display:none;margin: 5px auto;" id="canera_result">
            <van-panel title="名称" status="相似度" style="font-weight: bold">
            </van-panel>
            <van-panel title="非洲菊" status="75%">
            </van-panel>
            <van-panel title="月季花" status="18%">
            </van-panel><van-panel title="花毛莨" status="18%">
        </van-panel>
        </div>
    </div>
</template>

<script>
    export default {
        name: "Camera",
        data() {
            return {
                fileList: [
                    // Uploader 根据文件后缀来判断是否为图片文件
                    // 如果图片 URL 中不包含类型信息，可以添加 isImage 标记来声明
                ],
            };
        },

        methods: {
          afterRead(file) {
              // this.fileList.push({url:file});
              // 此时可以自行将文件上传至服务器
              console.log(file);
              var p =document.getElementById('canera_result');
              p.style.display='block';
          },
      },
    }
</script>

<style scoped>
.title{
    border: none;
}
</style>
