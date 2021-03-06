let userDB = [
    {
        'userName' : '',
        'password' : '',
        'level' : 'super'
    },
    {
        'userName' : 'user',
        'password' : 'user',
        'level' : 'usaul'
    }
]
import {routes, asyncRoutes} from '../router/index'

export default {
    /**
     * 
     * @param {*} param0 
     * @param {*} userInfo 
     */
    loginConfirm({commit},userInfo) {
        let confirm = userDB.filter(item => {
            return item.userName == userInfo.userName
                && item.password == userInfo.password
        })

        return new Promise((resolve,reject)=>{
            if (confirm.length>0) {
                commit('changeLogin',confirm[0].level)
                resolve()
            } else {
                reject('wrong')
            }
        })

    },

     getRoutes({commit}, level) {
         let res = routes.filter(item=>item.meta)
         
         if (level === 'super') {
             var accessRoutes = asyncRoutes.filter(item=>{
                 return item.meta
             })
             res = res.concat(accessRoutes)
         }
         
         commit('generateRoutes',res)
         return new Promise(reslove=>{
             reslove(res)
         })
     },

    logoutConfirm({commit}) {
        commit('changeLogout')
        return new Promise(resolve=>{
            resolve()
        })
    },

    changeNavBar({commit}) {
        commit('changeNavBar')
    }
}