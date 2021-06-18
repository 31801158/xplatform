<template>
    <div class="setting">
        <van-nav-bar title="设置" color="#f00"
                     :fixed="true"/>
        <div style="margin: 70px auto 0 auto;width: 90%; ">
            <van-cell-group  :border="true" style="text-align:left;">
                <van-cell title="个性化推荐" :border="true">
                    <van-switch v-model="personal" size="20px" active-color="#080"/>
                </van-cell>
                <van-cell title="推荐应用" :border="true"  @click="showShare = true">

                </van-cell>
                <van-share-sheet
                        v-model="showShare"
                        title="立即分享给好友"
                        @select="onSelect"
                        :options="options"/>
                <van-cell title="隐私政策" :border="true" @click="privacy">
                    <!-- 使用 right-icon 插槽来自定义右侧图标 -->
<!--                    <template #right-icon>-->
<!--                        <van-icon name="arrow" class="right-icon" />-->
<!--                    </template>-->
                </van-cell>

                <van-cell title="清除缓存":border="true" value="97.85MB">
                    <!-- 使用 right-icon 插槽来自定义右侧图标 -->
<!--                    <template #right-icon>-->
<!--                        <van-icon name="arrow" class="right-icon" />-->
<!--                    </template>-->
                </van-cell>
                <van-cell title="版本更新" :border="true" value="2.8.5"/>
                <van-cell title="意见反馈" :border="true" value="联系我们：75643@qq.com">
                </van-cell>
            </van-cell-group>

        </div>

    </div>
</template>

<script>
    import {Toast} from "vant";
    import { Dialog } from 'vant';
    export default {
        name: "Setting",
        data() {
            return {
                personal:true,
                showShare: false,
                options: [
                    { name: '微信', icon: 'wechat' },
                    { name: '微博', icon: 'weibo' },
                    { name: '复制链接', icon: 'link' },
                    { name: '分享海报', icon: 'poster' },
                    { name: '二维码', icon: 'qrcode' },
                ],
            };
        },

        methods: {
            onSelect(option) {
                Toast(option.name);
                this.showShare = false;
            },
            privacy(){
                Dialog.confirm({
                    title: '隐私政策',
                    message: '为帮助您安全使用产品和服务，在您同意授权的基础上，我们将收集您的射门分信息等。',
                })
                    .then(() => {
                        // on confirm
                        Toast("已同意");
                    })
                    .catch(() => {
                        // on cancel
                        Toast("已取消");

                    });
            }
      },
    }
</script>

<style scoped>
</style>
