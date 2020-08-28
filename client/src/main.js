import Vue from 'vue'
import App from './App.vue'
import VueRouter from 'vue-router'
import Admin from './components/Admin'
import Home from './components/Home'
import store from './store/app'

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
  store: store,
  render: h => h(App),
});