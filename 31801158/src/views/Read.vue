<template>
    <div class="read">
        <van-nav-bar title="阅读" color="#f00"
                     left-text="返回"
                     :fixed="true"
                     left-arrow
                     @click-left="onClickLeft"/>
        <div style="height: 90%;width: 90%;margin:45px auto 0 auto;overflow: hidden;">
            <van-count-down :time="time" style="">
                <template #default="timeData">
                    <span class="block" id="h">{{ timeData.hours }}</span>
                    <span class="colon">:</span>
                    <span class="block" id="m">{{ timeData.minutes }}</span>
                    <span class="colon">:</span>
                    <span class="block" id="s">{{ timeData.seconds }}</span>
                </template>
            </van-count-down>
            <van-pagination v-model="currentPage" :page-count="pages.length"  change="page" mode="simple" style="float: left;width: 100%;"/>

            <Page v-for="(p,index) in pages" v-show="currentPage==index+1" :content="p" style.native="height: 100%;"></Page>
        </div>

    </div>
</template>

<script>
    import {Toast} from "vant";
    import Page from "../components/Page";

    export default {
        name: "Read",
        components:{
            Page,
        },
        data() {
            return {
                pages:this.$route.query.pages,
                currentPage: 1,
                time: 1*60 * 60 * 1000,
                readTime:0,
            };
        },

        methods: {
            onClickLeft() {
                // Toast('返回');
                var h=document.getElementById("h").innerText;
                var m=document.getElementById("m").innerText;
                var s=document.getElementById("s").innerText;

                this.readTime=(59-m)* 60+(60-s);//阅读时间，精确到秒
                console.log(this.readTime)
                var _this=this;
                axios.patch('http://192.168.43.23:9785/posts/time/'+localStorage.username, {
                        time:this.readTime
                    }
                ).then(function(resp){
                    var x=_this.readTime/60;
                    Toast('阅读时长+'+x.toFixed(1)+'分钟');
                })
                this.$router.replace('/home');

            },
            page(){
                console.log(this.currentPage);
            }
      },
    }
</script>

<style scoped>
    .colon {
        display: inline-block;
        margin: 0 4px;
        color: #1989fa;
    }
    .block {
        display: inline-block;
        width: 22px;
        color: #fff;
        font-size: 12px;
        text-align: center;
        background-color: #1989fa;
    }
</style>
