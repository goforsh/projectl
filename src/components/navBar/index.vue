<template>
  <div class='menu-wrapper'>  
    <el-menu
      class="el-menu-vertical-demo" 
      background-color="#304156"
      text-color="white"
      active-text-color="#409EFF"
      collapse-transition="true"
      :collapse="isCollapse"
      mode="vertical">
    <navBar v-for="item in generate_routes" :item='item' :basePath='item.path' :key="item.name"/>      
    </el-menu>
  </div>
</template>

<script>
  import navBar from './navBar'
  import {mapState} from 'vuex'
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
    }
  },
  components: {
    navBar
  },
  computed:{
    ...mapState(['generate_routes','isCollapse']),
  },
  created(){},
  mounted(){
    console.log(this.generate_routes);
    
  },
  methods: {
  }
}
</script>
<style lang='scss' scoped>

.el-menu-vertical-demo {
  overflow-x: hidden;
  height:100%;
  &:not(.el-menu--collapse) {
    width: 200px;
    min-height: 400px;
 }
}



</style>
