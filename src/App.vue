<template>
  <div id="app">
    <router-view></router-view>
  </div>
</template>

<script>

export default {
  components:{
    

  }
}
</script>
<style lang='scss' scoped>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  height: 100vh;
  width: 100vw;  
}

#nav {
  padding: 30px;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: #42b983;
}

*{
  margin: 0;
  padding: 0;
}

html,body{
  width:100%;
  height:100%;
}

</style>
