import Vue from 'vue'
import App from './App.vue'
import VueRouter from 'vue-router'
import Admin from './components/Admin'
import Home from './components/Home'

Vue.config.productionTip = false
Vue.use(VueRouter)
const routes = [{
  path: '/',
  component: Home
}, {
  path: '/admin',
  component: Admin
}]

const router = new VueRouter({
  routes
});
new Vue({
  el: '#app',
  router,
  render: h => h(App),
});