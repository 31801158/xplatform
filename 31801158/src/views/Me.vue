<template>
    <div class="me" style="background: linear-gradient(#f7f7f7,#fafafa) ;">
        <van-nav-bar title="个人中心" color="#f00"
                     :fixed="true"/>
        <div style="margin: 50px auto 0 auto;width: 90%; ">
            <img src="../assets/study5.jpg" style="width: 70px;height: 70px;border-radius: 70px;margin-top: 30px;">
            <p>{{username}}</p>
            <div style="display: flex;justify-content: space-between;padding: 5px 50px;line-height: 19px;">
                <div  v-for="item in data1">
                    <p style="font-weight: bold;font-size: 19px;">{{item.num}}</p>
                    <p>{{item.text}}</p>
                </div>
            </div>
            <div style="background: white;border-radius:15px;display: flex;justify-content: space-between;flex-wrap:wrap;padding: 15px 10px;line-height: 12px;margin: 0 0 10px 0;">
                <div v-for="item in data2" style="width: 24%;margin-top: 8px;">
                    <van-icon :name="item.icon"  size="25px"/>
                    <p>{{item.text}}</p>
                </div>
            </div>
            <div style="background: white;padding: 10px;border-radius:15px;">
                <van-cell-group  :border="true" style="text-align:left;">
                    <van-cell title="个性化推荐" icon="star-o" :border="true">
                        <van-switch v-model="personal" size="20px"/>
                    </van-cell>
                                    <van-cell title="我的收藏" icon="like-o" :border="true">
                                        <!-- 使用 right-icon 插槽来自定义右侧图标 -->
                                        <template #right-icon>
                                            <van-icon name="arrow" class="right-icon" />
                                        </template>
                                    </van-cell>
                    <van-cell title="系统消息" icon="comment-o" :border="true">
                        <!-- 使用 right-icon 插槽来自定义右侧图标 -->
                        <template #right-icon>
                            <van-icon name="arrow" class="right-icon" />
                        </template>
                    </van-cell>
                    <!--                <van-cell title="反馈建议" icon="edit" :border="true">-->
                    <!--                    &lt;!&ndash; 使用 right-icon 插槽来自定义右侧图标 &ndash;&gt;-->
                    <!--                    <template #right-icon>-->
                    <!--                        <van-icon name="arrow" class="right-icon" />-->
                    <!--                    </template>-->
                    <!--                </van-cell>-->

                    <van-cell title="给软件评分" icon="star-o" :border="true">
                        <!-- 使用 right-icon 插槽来自定义右侧图标 -->
                        <template #right-icon>
                            <van-icon name="arrow" class="right-icon" />
                        </template>
                    </van-cell>
                    <van-cell title="隐私政策" icon="info-o" :border="true" @click="privacy">
                        <template #right-icon>
                            <van-icon name="arrow" class="right-icon" />
                        </template>
                    </van-cell>
                    <van-cell title="推荐应用" icon="star-o" :border="true"  @click="showShare = true">
                        <template #right-icon>
                            <van-icon name="arrow" class="right-icon" />
                        </template>
                    </van-cell>
                    <van-share-sheet
                            v-model="showShare"
                            title="立即分享给好友"
                            @select="onSelect"
                            :options="options"/>
                    <van-cell title="清除缓存" icon="replay" :border="true" value="97.85MB">
                    </van-cell>
                    <van-cell title="版本更新" icon="upgrade" :border="true" value="2.8.5">
                    </van-cell>
                </van-cell-group>
            </div>
            <van-button plain type="info" size="large" @click="logout" >退出登录</van-button>

        </div>
    </div>
</template>

<script>
    import {Dialog, Toast} from "vant";
    import Page from "../components/Page";

    export default {
        name: "Me",
        components:{
            Page,
        },
        data() {
            return {
                username:localStorage.username,
                pages:['111','2111'],
                currentPage: 1,
                personal:true,
                showShare: false,
                data1:[{
                    num:1997,
                    text:'学习'
                },{
                    num:85,
                    text:'关注'
                },{
                    num:133,
                    text:'粉丝'
                }],
                data2:[
                    {icon:'orders-o',text:'我的学习'},{icon:'points',text:'我的课程'},{icon:'underway-o',text:'浏览记录'},{icon:'todo-list-o',text:'草稿箱'},
                    {icon:'balance-o',text:'我的钱包'},{icon:'bulb-o',text:'创作中心'},{icon:'hot-o',text:'粉丝头条'},{icon:'service-o',text:'客服'}
                ],
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
                    message: '为帮助您安全使用产品和服务，在您同意授权的基础上，我们将收集您的信息等。',
                    confirmButtonColor:'#1989fa'
                })
                    .then(() => {
                        // on confirm
                        Toast("已同意");
                    })
                    .catch(() => {
                        // on cancel
                        Toast("已取消");

                    });
            },
            logout(){
                Toast('退出登录');
                this.$router.replace({path:'/login'});
                localStorage.removeItem("logged_in")
                localStorage.removeItem("username")
                // this.$store.commit('change');

                }
      },
    }
</script>

<style scoped>
    .right-icon {
        font-size: 16px;
        line-height: inherit;
    }
</style>
