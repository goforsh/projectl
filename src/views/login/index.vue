<template>
  <div class='main'>
      <welcome class="left"></welcome>
      <div class="verticalLine"></div>
      <login class="right" @login='login'></login>
  </div>
</template>

<script>
import welcome from 'src/components/login/welcome'
import login from 'src/components/login/login'
import {mapActions} from 'vuex'
export default {
  name: 'mainLogin',
  data(){
    return {}
  },
  components: {
      welcome,
      login
  },
  created(){},
  mounted(){
    const isDev = process.env.NODE_ENV === 'development'
    if (isDev) {
      console.log('zheshi dev');
    }
  },
  computed:{

  },
  methods: {
    ...mapActions(['loginConfirm']),
    login(payload){
      this.loginConfirm(payload).then(()=>{       
        this.$router.push('/main')
      }).catch(()=>{
        this.$message('用户名或密码错误')
      })

      




      

    }
  }
}
</script>
<style lang='scss' scoped>
.main{
    display: flex;
    align-items: center;
    width: 100%;
    height: 100%;
    background-color: #2d3a4b;
    color: white;
    .left{
        flex:10;
    }
    .verticalLine{
        height: 80%;
        flex: 0 0 1px;
        background-color: black;
    }
    .right{
        flex: 11;
    }
}
</style>
