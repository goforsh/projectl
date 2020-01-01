import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import Cookie from 'js-cookie'

import elementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'

import 'src/style/reset.css'


Vue.use(elementUI)

Vue.config.productionTip = false

router.beforeEach((to,from,next)=>{
  
  
  if (to.path != '/') {

    if (Cookie.get('logToken') === 'token') {      
      next()
    }
    else {
      next('/')
    }
  } else {
    next()
  }  
})

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')


