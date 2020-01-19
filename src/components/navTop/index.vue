<template>
  <div class='main'>
    <div class="leftNav">
      <i class="el-icon-menu size" @click="changeNav"/>
      <el-menu :default-active="activeIndex" class="el-menu-demo" mode="horizontal" @select="handleSelect">
        <el-menu-item index="1">处理中心</el-menu-item>
        <el-submenu index="2">
          <template slot="title">我的工作台</template>
          <el-menu-item index="2-1">选项1</el-menu-item>
          <el-menu-item index="2-2">选项2</el-menu-item>
          <el-menu-item index="2-3">选项3</el-menu-item>
          <el-submenu index="2-4">
            <template slot="title">选项4</template>
            <el-menu-item index="2-4-1">选项1</el-menu-item>
            <el-menu-item index="2-4-2">选项2</el-menu-item>
            <el-menu-item index="2-4-3">选项3</el-menu-item>
          </el-submenu>
        </el-submenu>
        <el-menu-item index="3" disabled>消息中心</el-menu-item>
        <el-menu-item index="4"><a href="https://www.ele.me" target="_blank">订单管理</a></el-menu-item>
      </el-menu>
    </div>
    <div class="rightNav">
            <span @click="test">lllllll</span>

      <span @click="logOut">log out</span>
    </div>
  </div>
</template>

<script>
import {mapActions} from 'vuex'
export default {
  name: '',
  data(){
    return {
      loginDialog: false
    }
  },
  components: {},
  created(){},
  mounted(){},
  methods: {
    ...mapActions(['logoutConfirm','changeNavBar']),
    logOut() {
      this.logoutConfirm().then(()=>{
        this.$router.replace('/')
      })
    },
    test(){
      this.$router.push('/edit')
    },
    changeNav(){
      this.changeNavBar()
      console.log(222);
      
    }
    
  }
}
</script>
<style lang='scss' scoped>
.main{
  display: flex;
  justify-content: space-between;
  border-bottom: solid 1px gainsboro;
  .leftNav{
    margin-left: 1%;
    display: flex;
    align-items: center;
    .size{
      font-size: 20px;
    }
  }
  .rightNav{
    flex:0 0 20%;
    background-color: red;
    padding: 10px;

  }
 
}
</style>
