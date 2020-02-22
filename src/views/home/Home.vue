<template>
  <div class="home">
    <navBar class="leftNav"></navBar>
    <div class="rightMain">
      <div class="topNav">
        <navTop></navTop>
        
      </div>
      <div class="bottomMain">
                <setPanel class="panel"></setPanel>

        <router-view/>
      </div>
    </div>      
  </div>
</template>

<script>
import navBar from 'src/components/navBar/index'
import navTop from 'src/components/navTop/index'
import setPanel from 'src/components/setPanel'
export default {
  name: 'home',
  components:{
    navBar,
    navTop,
    setPanel
  },
  computed:{
  },
  mounted(){
    
  }
}
</script>

<style lang="scss" scoped>
.home{
  display:flex;
  height: 100%;
  width: 100%;
  .leftNav{
    flex:0;
    height: 100%;
  }
  .rightMain {
    flex:1;
    overflow-y: scroll;
    overflow-x: hidden;
    background-color: gainsboro;
    .topNav {
      width: 100%;
      background-color: #fff;
      position: fixed;
      height: 4rem;
      z-index: 999;
    }
    .bottomMain {
      box-sizing: border-box;
      padding: 18px;
      margin-top:4rem;
      height: 100%;
      width:100%;
      .panel {
        position: fixed;
        right: 0;
        top: 30%;
        z-index: 999;
      }
    }
  }
}

</style>
