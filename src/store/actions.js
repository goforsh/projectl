let userDB = [
    {
        'userName' : 'admin',
        'password' : 'admin',
        'level' : 'super'
    },
    {
        'userName' : 'user',
        'password' : 'user',
        'level' : 'usaul'
    }
]

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
                commit('changeLogin','token')
                resolve(confirm[0].level)
            } else {
                reject('wrong')
            }
        })

    },
    logoutConfirm({commit}) {
        commit('changeLogout')
    }
}