import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue';
import bmap from '../views/bmap.vue';
import rtspDemo from '../views/rtspDemo.vue';

Vue.use(VueRouter)

const routes = [{
    path: '/',
    name: 'home',
    component: Home
  },
  {
    path: '/bmap',
    name: 'bmap',
    component: bmap
  }, {
    path: '/rtspDemo',
    name: 'rtspDemo',
    component: rtspDemo
  }
]

const router = new VueRouter({
  mode: "history", //后端支持可开
  base: "map-demo",
  routes
})

export default router