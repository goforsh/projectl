<template>
  <div class=''>  
    <div @click="isCollapse=!isCollapse">展开</div>
    <el-menu 
      default-active="1-4-1" 
      class="el-menu-vertical-demo" 
      @open="handleOpen" 
      @close="handleClose" 
      :collapse="isCollapse">
    <navItem/>      
    </el-menu>
  </div>
</template>

<script>
import navItem from './navItem'
export default {
  name: '',
  data(){
    return {
        navList:[
            {
                value: 'test1',
                index: 1
            },
               {
                value: 'test2',
                index: 2
            },
            {
                value: 'test3',
                index: 3
            }
        ],
        isCollapse:true,
    }
  },
  components: {
    navItem
  },
  created(){},
  mounted(){},
  methods: {}
}
</script>
<style lang='scss' scoped>
</style>
