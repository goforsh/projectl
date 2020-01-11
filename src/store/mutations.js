import Cookie from 'js-cookie'


export default {
    changeLogin(state, login) {
        let fiveMinutes = new Date(new Date().getTime()+ 5 * 60 * 1000);
        Cookie.set('logToken', login, {expires:fiveMinutes})
    },
    changeLogout(state) {        
        Cookie.remove('logToken')
        state.peimission_routes = []
    },
    generateRoutes(state, routes){
        console.log(routes,'commit');
        
        state.generate_routes = routes
        state.test = routes
        console.log(state.generate_routes,'aftercommit');
        
        

    }
}