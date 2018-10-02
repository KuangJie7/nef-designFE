import Vue from 'vue'
import App from './App.vue'
import VueRouter from 'vue-router'
import 'iview/dist/styles/iview.css'
import Routes from './router.js'

Vue.use(VueRouter)
Vue.config.productionTip = false

const routerConfig = {
  routes: Routes
}
const router = new VueRouter(routerConfig)

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
