<template>
  <div class="home">
    <navBar class="leftNav"></navBar>
      <div class="rightMain">
        <div class="topNav">
          <navTop></navTop>
        </div>
        <div class="bottomMain">
          <router-view/>
        </div>
      </div>      
  </div>
</template>

<script>
import navBar from 'src/components/navBar/index'
import navTop from 'src/components/navTop/index'
export default {
  name: 'home',
  components:{
    navBar,
    navTop

  },
  computed:{
  },
  mounted(){
    
  }
}
</script>

<style lang="scss" scoped>
.home{
  display: flex;
  .leftNav{
    height: 100%;
    flex: 0;    
  }
  .rightMain {
    flex: 1;
    display: flex;
    flex-direction: column;
  }
}

</style>
