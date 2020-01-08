import router from './router'
import Cookie from 'js-cookie'
import store from 'src/store'

router.beforeEach(async(to,from,next)=>{    
  if (to.path != '/') {
    let auth = Cookie.get('logToken');
    if (store.state.permission_routes.length === 0) {
      if (auth == undefined) {
        next('/')
      }
      const routes = await store.dispatch('getRoutes', auth)
      router.addRoutes(routes)
    } 
  } 
  next() 
})