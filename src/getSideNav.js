import router from './router'
import Cookie from 'js-cookie'
import store from 'src/store'


router.beforeEach((to,from,next)=>{ 
  if (to.path != '/') {
    let auth = Cookie.get('logToken');
    if (store.state.generate_routes.length === 0) {
      if (auth == undefined) {
        next('/')
      }
       store.dispatch('getRoutes', auth).then(res=>{
          router.addRoutes(res)         
       })       
    } 
  } 
  next() 
})