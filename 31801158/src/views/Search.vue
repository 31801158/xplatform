<template>
  <div class="search">
    <van-nav-bar title="搜索" color="#f00" :fixed="true"/>
    <div  style="width: 90%;margin: 45px auto 0 auto;">
      <form action="/">
        <van-search
                v-model="value"
                show-action
                placeholder="请输入搜索关键词"
                @search="onSearch"
                @cancel="onCancel"
        />
      </form>
      <div style=" display:flex;align-items:center;flex-wrap:wrap;justify-content:space-between">
        <one-search v-for="search in searches" :searchName="search.searchName" :img="search.img" ></one-search>
      </div>
    </div>

  </div>
</template>
<script>
  import OneSearch from '@/components/OneSearch.vue'
  import { Toast } from 'vant';
  var search1 = require('../assets/search1.png');
  var search2 = require('../assets/search2.png');
  var search3 = require('../assets/search3.png');
  var search4 = require('../assets/search4.png');
  var search5 = require('../assets/search5.png');
  var search6 = require('../assets/search6.png');
  var search7 = require('../assets/search7.png');
  var search8 = require('../assets/search8.png');
  var search9 = require('../assets/search9.png');
  var search10 = require('../assets/search10.png');
  var search11 = require('../assets/search11.png');
  var search12 = require('../assets/search12.png');
  var search13 = require('../assets/search13.png');

  export default {
    name: 'Search',
    components:{
      OneSearch,
    },

    data() {
      return {
        value: '',
        searches:[
          {
            searchName:'拍照识图',
            img:search13,
          },
          {
            searchName:'中医古籍',
            img:search6,
          },
          {
            searchName:'中草药',
            img:search1,
          },
          {
            searchName:'方剂',
            img:search2,
          },
          {
            searchName:'偏方',
            img:search3,
          },
          {
            searchName:'药酒大全',
            img:search4,
          },
          {
            searchName:'中成药',
            img:search5,
          },

          {
            searchName:'针灸穴位图',
            img:search7,
          },
          {
            searchName:'中药鉴别',
            img:search8,
          },{
            searchName:'医案心得',
            img:search9,
          },
          {
            searchName:'中药炮制',
            img:search10,
          },
          {
            searchName:'中医美容',
            img:search11,
          },
          {
            searchName:'中医名词',
            img:search12,
          },

        ],


      };
    },
    methods: {
      onSearch(val) {
        Toast(val);
      },
      onCancel() {
        Toast('取消');
      },

    },
  };
</script>
