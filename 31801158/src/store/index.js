import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    logined_in:false,
    user_name:'',
  },
  mutations: {
    change(){
      this.state.logined_in=true
    },
    setUserName(state,name){
      this.state.user_name=name;
    },
  },
  actions: {
  },
  modules: {
  }
})
