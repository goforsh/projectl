<template>
  <div class='deTools'>
      <div>
        <div></div>
      </div>
      <div>2</div>
      <div>3</div>
      <div>4</div>
  </div>
</template>

<script>
export default {
  name: '',
  data(){
    return {}
  },
  components: {},
  created(){},
  mounted(){},
  methods: {}
}
</script>
<style lang='scss' scoped>
.deTools {
  height: 100%;
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  flex-direction: column;
  div {
    height: 50%;
    width: 50%;
    transition: 1s;
    &:nth-child(1) {
     background-color: #fff;
   }
   &:nth-child(2) {
     background-color: #000;
   }
   &:nth-child(3) {
     background-color: red;
     transition-delay: 1s;
   }
   &:nth-child(4) {
     background-color: purple;
          transition-delay: 1s;

   }
   &:nth-child(1):hover {
     width: 100%;
     height: 100%;
     &~:nth-child(2) {
       height: 0;
     }
     
   }
  }
}
</style>
