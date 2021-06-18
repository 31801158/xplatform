import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import { CountDown } from 'vant';

Vue.use(CountDown);
Vue.use(VueRouter)

const routes = [
  {
    redirect:'/home',
    path:"*"
  },
{
    path: '/login',
    name: 'Login',
    hidden: true ,
    component: () => import(/* webpackChunkName: "about" */ '../views/Login.vue')
  },
  {
    path: '/home',
    name: 'Home',
    component: () => import(/* webpackChunkName: "about" */ '../views/Home.vue'),
    meta:{
      // 必须登录才可以看
      login_required: true
    },
  },
  {
    path: '/search',
    name: 'Search',
    meta:{
      // 必须登录才可以看
      login_required: true
    },
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/Search.vue')
  },
  {
    path: '/camera',
    name: 'Camera',
    component: () => import(/* webpackChunkName: "about" */ '../views/Camera.vue'),
    meta:{
      login_required: true
    },
  },
  {
    path: '/bookcontent',
    name: 'BookContent',
    component: () => import(/* webpackChunkName: "about" */ '../views/BookContent.vue'),
    meta:{
      login_required: true
    }
  },
  {
    path: '/read',
    name: 'Read',
    component: () => import(/* webpackChunkName: "about" */ '../views/Read.vue'),
    meta:{
      login_required: true
    }
  },{
    path: '/me',
    name: 'Me',
    component: () => import(/* webpackChunkName: "about" */ '../views/Me.vue'),
    meta:{
      login_required: true
    }
  },{
    path: '/rank',
    name: 'Rank',
    component: () => import(/* webpackChunkName: "about" */ '../views/Rank.vue'),
    meta:{
      login_required: true
    }
  },

]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})
router.beforeEach(function (to,from,next) {
  // logged_in => 登录状态 => 未登录false,登录true
  // login_required => 权限限制 => 不需登录false,需登录true
  var logged_in = localStorage.logged_in? true:false;
  if (!logged_in && to.matched.some(function (item) {
    return item.meta.login_required;
  }))
    next('/login');
  else
    next();
});

export default router
