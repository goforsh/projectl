<template>
<div class="navItem">
  <el-menu-item v-if="isOneRoute()" index="1-1">{{item.name}}</el-menu-item>

  <el-submenu v-else index="1">
    <template slot="title">
      <i class="el-icon-location"></i>
      <span slot="title">{{item.name}}</span>
    </template>
      <el-menu-item v-for="child in item.children" :key="child.name" index="1-1">{{child.name}}</el-menu-item>
  </el-submenu>
</div>
      
</template>

<script>
export default {
  name: '',
  data(){
    return {}
  },
  props:{
    item:Object
  },
  components: {},
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
  width: auto;
}
</style>
