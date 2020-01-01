import Cookie from 'js-cookie'


export default {
    changeLogin(states, login) {
        Cookie.set('logToken', login)
    },
    changeLogout() {        
        Cookie.remove('logToken')
    }
}