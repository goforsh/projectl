<template>
  <div class="loginDialog">
    <div class="loginLine">
      <label for="userName">用户名:</label>
      <el-input 
        v-model="userName" 
        name="userName"
        placeholder="请输入用户名"
        size="middle"
        class="elInput"
        prefix-icon="el-icon-user"
      ></el-input>
    </div>
    <div class="loginLine">
      <label for="password">密码:</label>
      <el-input 
        v-model="password" 
        name="password"
        placeholder="请输入密码"
        size="middle"
        class="elInput"
        prefix-icon="el-icon-key"
      ></el-input>
    </div>  
    <div class="loginFooter">
      <el-button>取 消</el-button>
      <el-button type="primary" @click="login">确 定</el-button>
    </div>      
  </div>     
</template>

<script>
export default {
  name: '',
  data(){
    return {
      userName:'',
      password:''
    }
  },
  components: {},
  created(){},
  mounted(){},
  methods: {
    login(){
      this.$emit('login',{'userName':this.userName,'password':this.password})
    }
  }
}
</script>
<style lang='scss' scoped>
 .loginDialog{
    display: flex;
    flex-direction: column;
    align-items: center;
    .loginLine{
      display: flex;
      width: 50%;
      margin: 10px;
      label{
        display: flex;
        align-items: center;
        justify-content: flex-start;
        flex: 0 0 60px;
        font-size: 18px;
      }
      .elInput{
        flex: 1;
      }
    } 
    .loginFooter{
      width: 50%;
      display: flex;
      justify-content: flex-end;
    }     
  }
</style>
