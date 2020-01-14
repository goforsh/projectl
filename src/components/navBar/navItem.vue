<template>
<div class="navItem">
  <el-menu-item v-if="isOneRoute()" index="1-1">
    <navItem :title="item.meta.title" :icon='item.meta.icon'/>
  </el-menu-item>

  <el-submenu v-else index="1">
    <template slot="title">
      <navItem :title="item.meta.title" :icon='item.meta.icon'/>
    </template>
      <el-menu-item v-for="child in item.children" :key="child.meta.title" index="1-1">{{child.meta.title}}</el-menu-item>
  </el-submenu>
</div>
      
</template>

<script>
import navItem from './item'
export default {
  name: '',
  data(){
    return {}
  },
  props:{
    item:Object
  },
  components: {
    navItem
  },
  created(){},
  mounted(){
    console.log(this.item,'item');
    
  },
  methods: {
    isOneRoute(){
      if ('children' in this.item) {
        if (this.item.children.length > 1) {
          return false
        }        
      }

      return true
    }
  }
}
</script>
<style lang='scss' scoped>
.navItem {
  .el-submenu, .el-menu-item{
    text-align: start;
    width:100%;
    span{
      margin-left: 20px;
    }    
  } 
}
</style>
