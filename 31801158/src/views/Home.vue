<template>
  <div class="home">
    <van-nav-bar title="首页" color="#f00" :fixed="true">
    </van-nav-bar>
    <div style="margin-top: 45px;">
      <van-swipe :autoplay="3000">
        <van-swipe-item v-for="(image, index) in images" :key="index">
          <img :src="image" style="width:90%;"/>
        </van-swipe-item>
      </van-swipe>
      <van-tabs style="width:90%;margin: auto;" v-model="vanTabsActive" color="#005dc6" >
        <van-tab title="推荐">
            <div style="margin: 0 0px 10px 0px;">
              <p class="title">古籍热读榜</p>
              <div style="width: 100%;float: left;border-bottom: 1px dashed darkgrey;margin-bottom: 10px;"  @click="bookContent(0)">
                <img :src="this.hotReadings[0].img" style="height: 130px;float: left;margin-right: 10px;">
                <div style="padding: 5px; text-align: left;">
                  <p style="font-size: 16px;font-weight: bold">《{{this.hotReadings[0].name}}》</p>
                  <p style="font-size: 13px;font-weight: bold;">{{this.hotReadings[0].describe}}</p>
                  <p style="font-size: 13px;line-height: 15px;display: -webkit-box;-webkit-box-orient: vertical;-webkit-line-clamp: 2;overflow: hidden;">{{this.hotReadings[0].content}}</p>

                </div>
              </div>
              <book v-for="(book,index) in hotReadings" :bookName="book.name" :describe="book.describe" :img="book.img"
                    @click.native="bookContent(index)" style="margin-bottom: 10px;"></book>
              <p class="title">热门学习课</p>
              <img :src="this.classes[0]" style="width: 100%;float: left">
              <img :src="this.classes[1]" style="width:38%;float: left;margin: 5px 5px 5px 0px;">
              <img :src="this.classes[2]" style="width:58%;float: left;margin: 5px 0px 0px 5px;">
              <img :src="this.classes[3]" style="width:58%;float: left;margin: 5px 0px 5px 5px;">
            </div>
            <p class="title">学习与讨论</p>
            <study v-for="study in studies" :count="study.count" :img="study.img" :describe="study.describe" :title="study.title"></study>
            <van-loading type="spinner" />
          </van-tab>
        <van-tab title="古籍分类">
          <big-sort :big-sort="this.sort"></big-sort>
        </van-tab>

      </van-tabs>

    </div>

  </div>
</template>

<script>
// @ is an alias to /src
import Book from '@/components/Book.vue'
import Study from '@/components/Study.vue'
import BigSort from "../components/BigSort";
import SmallSort from "../components/SmallSort";

var swipe1 = require('../assets/swipe1.jpg');
var swipe2 = require('../assets/swipe2.jpg');
var swipe3 = require('../assets/swipe3.jpg');
var swipe4 = require('../assets/swipe4.jpg');
var book1 = require('../assets/book1.jpg');
var book2 = require('../assets/book2.jpg');
var book3 = require('../assets/book3.jpg');
var book4 = require('../assets/book4.jpg');
var logo = require('../assets/logo.png');
var class1 = require('../assets/class1.jpg');
var class2 = require('../assets/class2.jpg');
var class3 = require('../assets/class3.jpg');
var class4 = require('../assets/class4.jpg');
var study1 = require('../assets/study1.jpg');
var study2 = require('../assets/study2.jpg');
var study3 = require('../assets/study3.jpg');
var study4 = require('../assets/study4.jpg');
var study5 = require('../assets/study5.jpg');
var study6 = require('../assets/study6.jpg');
var study7 = require('../assets/study7.jpg');
var study8 = require('../assets/study8.jpg');

export default {
  name: 'Home',
  components:{
    Book,
    Study,
    BigSort,
    SmallSort
  },
  data() {
    return {
      vanTabsActive: 0,
      classes:[
        class1,class2,class3,class4
      ],
      hotImg:[
              book4,book1,book3,book2
      ],
      images: [
        swipe1,
        swipe2,
        swipe3,
        swipe4
      ],
      hotReadings:[],
      studies:[
        {
          img: study5,
          title:'改善经济，这里有正门！',
          describe:'自力更生，5.16更新',
          count:18289
        },
        {
          img: study7,
          title:'改善经济，这里有正门！',
          describe:'君臣佐使，4.20更新',
          count:100
        },
        {
          img: study8,
          title:'影响健康十大疾病之首',
          describe:'专病妙法，4.15更新',
          count:100

        },
        {
          img: study6,
          title:'高考只是理想上的一步',
          describe:'肺腑之言，3.29更新',
          count:100
        },
        {
          img: study4,
          title:'中草药造假，令人深思！',
          describe:'亟待正念，3.26更新',
          count:18289
        },
        {
          img: study3,
          title:'古代中医考核，是这样的？',
          describe:'学医体会，2.18更新',
          count:100
        },
        {
          img: study2,
          title:'生是中医人，死是中医魂',
          describe:'追思邓老，1.23更新',
          count:100

        },
        {
          img: study1,
          title:'“键盘”中医的诊疗秘籍',
          describe:'中医心得，1.23更新',
          count:100
        },
      ],
      sort:[
        {
          big:'热门',
          small:['黄帝内经','本草纲目','伤寒杂病论','医宗金鉴','景岳全书','四圣心源']
        },
        {
          big:'基础典籍',
          small:['中医经典','《内经》专区','《难经》专区','《伤寒专区》','《金匮》专区','温病专区','中医入门','背诵专区','基础理论']
        },{
        big:'养生保健',
          small: ['养生保健']
        },{
        big:'孤本',
          small:['孤本']
        },{
          big:'临证各科',
          small:['伤寒派','河间派','易水派','攻邪派','滋阴派','温补派']
        },{
        big:'历代医家',
          small:['曹颖甫','成无己','陈修园','傅山','皇甫谧','黄元卿','汪机','柯勤','浅乙','张元素']
        }
      ]
    }
  },
  created() {
    var _this=this;

    axios.get('http://192.168.43.23:9785/book').then(function(resp){
      _this.hotReadings=resp.data;
      for(var i=0;i<_this.hotReadings.length;i++){
        _this.hotReadings[i].img=_this.hotImg[i];
      }
      console.log(_this.hotReadings);//数组
    })
  },
  methods:{
    fun(){

    },
    bookContent:function (index) {
      console.log(index);
        this.$router.push({
          path:'/bookcontent',
          query:{
            book:this.hotReadings[index]
          }
      });
    }
  }
}
</script>
<style>
  .slide-fade-enter-active {
    transition: all .3s ease;
  }
  .slide-fade-leave-active {
    transition: all .8s cubic-bezier(1.0, 0.5, 0.8, 1.0);
  }
</style>
