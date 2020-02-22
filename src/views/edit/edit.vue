<template>
  <div class='edit'>
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
@mixin divChild($n, $b) {
  &:nth-child($n) {
    background-color: $b;
  }
}
 .edit {
   width: 100%;
   height: 100%;
   display: grid;
   grid-template-columns: repeat(2,1fr);
   grid-template-rows: repeat(2,1fr);
   div {
     transition: all linear 10s;
     div {
       width: 100%;
       height: 100px;
       background-color: #fff;
       transition: 2s;
     }
   }
   div:nth-child(1) {
   }
   div:nth-child(2) {
     background-color: #000;
   }
   div:nth-child(3) {
     background-color: red;
   }
   div:nth-child(4) {
     background-color: purple;
   }
   div:nth-child(1):hover{

     grid-row: span 2;  
     div {
       height: 100%;
     }
      &~div:nth-child(3) {
       display: none;
     }
   }
 }
</style>
