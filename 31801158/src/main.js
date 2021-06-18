import Vue from 'vue'
import './plugins/axios'
import App from './App.vue'
import router from './router'
import store from './store'
import Vant from 'vant';
import 'vant/lib/index.css';
import './assets/resetVui.css'
Vue.use(Vant);


import {Lazyload} from 'vant';
Vue.use(Lazyload);
Vue.config.productionTip = false

const app=new Vue({
  router,
  store,
  render: h => h(App),
}).$mount('#app');
