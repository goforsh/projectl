<template>
<div class="navItem">
  <template v-if="isOneRoute()">
    <router-link :to="resolvePath(item.path)" class="routeLink">
      <el-menu-item index="1-1">
        <menuItem :title="item.meta.title" :icon='item.meta.icon'/>
      </el-menu-item>
    </router-link>
  </template>
  

  <el-submenu v-else index="1" popper-append-to-body>
    <template slot="title">
      <menuItem :title="item.meta.title" :icon='item.meta.icon'/>
    </template>
      <navBar v-for="child in item.children"
              :key="child.name"
              :item="child"
              :basePath="item.path"/>
      <!-- <el-menu-item v-for="child in item.children" :key="child.meta.title" index="1-1">{{child.meta.title}}</el-menu-item> -->
  </el-submenu>
</div>
      
</template>

<script>
import path from 'path'
import menuItem from './menuItem'
import {isExternal} from 'src/util/index'
export default {
  name: 'navBar',
  data(){
    return {}
  },
  props:['item','basePath'],
  components: {
    menuItem
  },
  created(){},
  mounted(){
    console.log(this.item.path,'item');
    
  },
  methods: {
    isOneRoute(){
      if ('children' in this.item) {
        if (this.item.children.length > 1) {
          return false
        }        
      }

      return true
    },
    resolvePath(routePath) {
      if (isExternal(routePath)){
        return routePath
      }
      
      return path.resolve(this.basePath, routePath)
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
  .routeLink{
    text-decoration: none
  }
}
</style>
