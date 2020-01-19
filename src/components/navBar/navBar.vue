<template>
<div class="navItem">
  <template v-if="isOneRoute()">
    <router-link :to="resolvePath(item.path)" class="routeLink">
      <el-menu-item :index="resolvePath(item.path)">
        <menuItem :title="item.meta.title"  :icon='item.meta.icon'/>
      </el-menu-item>
    </router-link>
  </template>

  <el-submenu v-else>
    <template slot="title">
      <menuItem v-if="item.meta" :title="item.meta.title" :icon='item.meta.icon'/>
    </template>
    <navBar v-for="child in item.children"
            :key="child.name"
            :item="child"
            :basePath="item.path"/>
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
    /deep/
    span{
      margin-left: 15px;
    }      
  } 
  .routeLink{
    text-decoration: none
  }
}
.el-submenu .el-menu-item{
  background-color: #1f2d3d !important;
}

</style>
