import Vue from 'vue';
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
import App from './App.vue';
import VueRouter from 'vue-router';
import VueResource from 'vue-resource';

import login from './views/login'
import register from './views/register'

Vue.use(VueRouter)
Vue.use(VueResource)
Vue.use(ElementUI, { size: 'small' });

const routes = [
  { path: '/', component: login },
  { path: '/index', component: login },
  { path: '/login', component: login },
  { path: '/register',component:register}
]

const router = new VueRouter({
    mode: 'history',
  routes
})

new Vue({
  el: '#app',
  router,
  render: h => h(App)
})
