<template>
    <div class="book-content">
        <van-nav-bar
                title="古籍阅读"
                left-text="返回"
                right-text="按钮"
                left-arrow
                :fixed="true"
                @click-left="onClickLeft">
            <template #right>
                <van-icon name="share" color="#1989fa" size="18" @click="showShare = true"/>
                <van-share-sheet
                        v-model="showShare"
                        title="立即分享给好友"
                        :options="options"/>
            </template>
        </van-nav-bar>
        <div style="width: 90%;display: flex;justify-content: space-between;margin: 0 auto;margin-top: 45px;">
            <MyButton v-for="b in myButtons" :myicon="b.myicon" :mytext="b.mytext"  @click.native="read(b.mytext)"></MyButton>
<!--            <van-button plain type="info">-->
<!--                <van-icon name="add" />加入书库-->
<!--            </van-button>-->
<!--            <van-button plain type="info">-->
<!--                <van-icon name="bookmark-o" />白话文-->
<!--            </van-button>-->
<!--            <van-button plain type="info">-->
<!--                <van-icon name="label-o" />阅读-->
<!--            </van-button>-->


        </div>


        <div style="width: 90%;height:150px;float: left;margin:auto;margin-left: 20px;border-bottom:1px grey solid;">
            <img :src="this.book.img" style="height: 130px;float: left;margin-right: 10px;">
            <div style="padding: 5px; text-align: left;">
                <p style="font-size: 16px;font-weight: bold">《{{this.book.name}}》</p>
                <p style="font-size: 13px;font-weight: bold;">{{this.book.describe}}</p>

            </div>
        </div>
        <div style="width: 90%;margin:10px auto;">
            <div>&nbsp;</div>
            <van-tabs v-model="active"  color="#005dc6" >
                <van-tab title="内容概要" style="height: 70px;" id="van-tab-1">
                   <div>
                       <p id="content" style="width: 100%;height:50px;text-align:left;font-size: 14px;line-height: 17px;display: -webkit-box;-webkit-box-orient: vertical;-webkit-line-clamp: 3;overflow: hidden">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{{this.book.content}}</p>
                       <div id="arrow-down" >
                           <van-icon name="arrow-down" @click="arrowDown" />
                       </div>
                       <p class="title">中医经典推荐</p>
                       <book v-for="(hot,index) in hotReadings" :bookName="hot.name" :describe="hot.describe" :img="hot.img"
                             @click.native="bookContent(index)" style="margin-bottom: 10px;"></book>
                       <p class="title">与《{{this.book.name}}》相关的方剂</p>
                       <div style="display: flex;justify-content: space-between;flex-wrap:wrap;">
                           <div v-for=" recipe in recipes" class="recipe">{{recipe}}</div>
                       </div>
                       <div style="height:55px;"></div>
                   </div>
                </van-tab>
                <van-tab title="目录">
                    <van-collapse v-model="activeNames">
                        <van-collapse-item v-for="(c,index) in book.catalogues" :title="c.c1" :name="index">
                            <div v-for="c3 in c.c2"> {{c3}}</div>
                        </van-collapse-item>
                    </van-collapse>
                </van-tab>
            </van-tabs>
        </div>
    </div>
</template>

<script>
    import { Toast } from 'vant';
    import MyButton from "../components/MyButton";
    import Book from '@/components/Book.vue'
    var book1 = require('../assets/book1.jpg');
    var book2 = require('../assets/book2.jpg');
    var book3 = require('../assets/book3.jpg');
    var book4 = require('../assets/book4.jpg');
    export default {
        name: "BookContent",
        components:{
            MyButton,Book
        },
        data() {
            return {
                book:this.$route.query.book,
                active:0,
                activeNames: ['1'],
                showShare: false,
                options: [
                    [
                        { name: '微信', icon: 'wechat' },
                        { name: '朋友圈', icon: 'wechat-moments' },
                        { name: '微博', icon: 'weibo' },
                        { name: 'QQ', icon: 'qq' },

                    ],
                    [
                        { name: '复制链接', icon: 'link' },
                        { name: '分享海报', icon: 'poster' },
                        { name: '二维码', icon: 'qrcode' },
                        { name: '小程序码', icon: 'weapp-qrcode' },
                        { name: '保存图片', icon: 'poster' },

                    ],
                ],
                myButtons:[
                    {
                        mytext:'加入书库',
                        myicon:'plus'
                    }, {
                        mytext:'白话文',
                        myicon:'bookmark-o'
                    }, {
                        mytext:'阅读',
                        myicon:'label-o'
                    }
                ],
                hotReadings:[{
                    img: book4,
                    name:'素问',
                    describe:'现存最早的中医理论著作',
                    content:'《素问》, 又名《黄帝内经素问》, 相传为黄帝创作,大约成书于春秋战国时期。原来9卷,后经唐王冰订补,改编为24卷,计81篇,定名为《黄帝内经素问》, 所论内容十分丰富，以人与自然统-观、阴阳学说、五行说、脏腑经络学为主线，论述摄生、脏腑、经络、病因、病机、治则、药物以及养生防病等各方面的关系,集医理、医论、医方于一体，保存了《五色》、《脉变》、《上经》、《下经》、《太始天元册》等20多种古代医籍,突出阐发了古代的哲学思想,强调了人体内外统一的整体观念，从而成为中医基本理论的渊源。',
                    catalogues:[{
                        c1:'卷第一',
                        c2:['上古天真论篇第一','四气调神大论篇第二','生气通天论篇第三','金匮真言论篇第四']
                    },{
                        c1:'卷第二',
                        c2:['阴阳应象大论篇第五','阴阳离合论篇第六','阴阳别论篇第七']
                    },{
                        c1:'卷第三',
                        c2:['铃兰密典论篇第八','六节藏象论篇第九','五脏生成篇第十','五脏别论篇第十一']
                    }]
                },{
                    img:book1,
                    name:'伤寒论',
                    describe:'中医四大经典著作之一'
                },{
                    img:book3,
                    name:'本草纲目',
                    describe:'有世界影响力的博物学著作'
                },
                    {
                        img: book2,
                        name:'四圣心源',
                        describe:'黄元御承先圣思想的开山之作'
                    }],
                recipes:['兰草汤','血枯方','鸡矢醴','半夏汤','生铁落饮','角法泗']
            };
        },
        methods: {

            onClickLeft() {
                Toast('返回');
                this.$router.replace('/home');

            },
            onClickRight() {
                Toast('搜索');
            },
            arrowDown(){
                var vanTab1=document.getElementById('van-tab-1');
                var content=document.getElementById('content');
                var down=document.getElementById('arrow-down');
                content.style.overflow='visible';
                content.style.height='150px';
                down.style.display='none';
            },
            read(text) {
                if(text!=="阅读")
                    Toast(text);
                else{
                    this.$router.push({
                        path:'/read',
                        query:{
                            pages:this.book.pages
                        }
                    });
                }

            },
      },
    }
</script>

<style scoped>
.recipe{
    box-shadow: 3px 3px 3px grey ;
    margin-bottom: 5px;
    border-radius: 10px;
    border:1px solid grey;
    width: 30%;
    height: 30px;
    padding-top: 8px;
    display: block;
}
</style>
