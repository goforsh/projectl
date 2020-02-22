import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import echarts from 'echarts'
import elementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'

import './getSideNav'
import 'src/style/reset.css'

import 'src/icon'

Vue.use(elementUI)

Vue.config.productionTip = false
Vue.prototype.$echarts = echarts
new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')



