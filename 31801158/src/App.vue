<template>
  <div id="app">
    <meta name="viewport" content="width=device-width,initial-scale=1,minimum-scale=1,maximum-scale=1,user-scalable=no" />
      <router-view/>
      <div style="height: 4rem;"></div>
      <div id="tabbar" v-show="this.$store.state.logined_in">
          <van-tabbar v-model="vanTabbarActive" active-color="#1989fa" inactive-color="#000">
              <van-tabbar-item icon="home-o" @click="switchToTab('/home')">首页</van-tabbar-item>
              <van-tabbar-item icon="search" @click="switchToTab('/search')">查找</van-tabbar-item>
              <van-tabbar-item icon="bar-chart-o"  @click="switchToTab('/rank')">排行榜</van-tabbar-item>
              <van-tabbar-item icon="user-o" @click="switchToTab('/me')">我</van-tabbar-item>
          </van-tabbar>
      </div>


  </div>
</template>
<script>
  export default {
    data(){
      return{
          vanTabbarActive: 0,
      }
    },
      created() {
          this.$store.state.logined_in=localStorage.logged_in;
          console.log(this.$store.state.logined_in);
      },
      methods:{
          switchToTab(path){
              console.log(path);
              this.$router.replace(path);

          }
      }
  }
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  padding: 30px;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: #42b983;
}
.my-swipe .van-swipe-item {
    color: #fff;
    font-size: 20px;
    line-height: 150px;
    text-align: center;
    background-color: #39a9ed;
}
</style>
