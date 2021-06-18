<template>
  <div id="app">
      <div style="height: 4rem;"></div>
      <div id="tabbar" style="display: none;">
          <van-tabbar v-model="vanTabbarActive" active-color="#0a0" inactive-color="#000">
              <van-tabbar-item icon="home-o" @click="switchToTab('/')">首页</van-tabbar-item>
              <van-tabbar-item icon="search" @click="switchToTab('/search')">查找</van-tabbar-item>
              <van-tabbar-item icon="setting-o"  @click="switchToTab('/setting')">设置</van-tabbar-item>
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
