import Cookie from 'js-cookie'


export default {
    changeLogin(state, login) {
        // let fiveMinutes = new Date(new Date().getTime()+ 5 * 60 * 1000);
        Cookie.set('logToken', login)
    },
    changeLogout(state) {        
        Cookie.remove('logToken')
        state.generate_routes = []
        console.log(Cookie.get('logToken'));
        console.log(state.generate_routes,'asdadsa');
        
    
        
    },
    generateRoutes(state, routes){
        state.generate_routes = routes
    },
    changeNavBar(state) {
        state.isCollapse = !state.isCollapse
    }
}