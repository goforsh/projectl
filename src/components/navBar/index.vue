<template>
  <div class=''>  
    <div @click="isCollapse=!isCollapse">展开</div>
    <el-menu 
      default-active="activeMenu" 
      class="el-menu-vertical-demo" 
      background-color="black"
      text-color="white"
      active-text-color="yellow"
      collapse-transition="true"
      :collapse="isCollapse"
      mode="vertical">
    <navItem v-for="item in generate_routes" :item = 'item' :key="item.path"/>      
    </el-menu>
  </div>
</template>

<script>
  import navItem from './navItem'
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
        isCollapse:false,
    }
  },
  components: {
    navItem
  },
  computed:{
    ...mapState(['generate_routes'])
  },
  created(){},
  mounted(){
//      this.getRoutes('super').then(res=>{
//       console.log(res,'super');
//       console.log(this.generate_routes,'permis');
      
// console.log(this.test,'333');

//      })

// setTimeout(()=>{
//         console.log(this.generate_routes,'permis');

// },5000)
  },
  methods: {
    
  }
}
</script>
<style lang='scss' scoped>
</style>
