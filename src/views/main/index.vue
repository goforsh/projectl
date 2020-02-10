<template>
  <div class='main'>
      <panel/> 
  </div>
</template>

<script>
import panel from 'src/components/main/panel'
export default {
  name: '',
  data(){
    return {}
  },
  components: {
    panel
  },
  created(){},
  mounted(){
 
  },
  methods: {}
}
</script>
<style lang='scss' scoped>
  .main {
    width: 100%;
    height: 100%;
    background-color: gainsboro;
  }
</style>
