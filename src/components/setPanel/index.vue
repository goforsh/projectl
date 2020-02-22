<template>
  <div class='panelContainer'>
      <ul>
          <i class="el-icon-setting"></i>
          <li>1</li>
          <li>2</li>
          <li>3</li>
          <li>4</li>
          <li>5</li>
      </ul>
      
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
.panelContainer{
    width: 50px;
    height: 50px;
    background-color: rgb(24, 144, 255);
    border-top-left-radius: 15%;
    border-bottom-left-radius: 15%;
    position: relative;
    z-index: 999;
    ul {
        width: 100%;
        height: 100%;
        position: relative;
        i {
            width: 100%;
            height: 100%;
            font-size: 25px;
            color: white;
            line-height: 50px;
        }
        li {
            width: 25px;
            height: 25px;
            background-color: rgb(24, 144, 255);;
            border-radius: 50%;
            position: absolute;
            top: -60%;
            left: 20%;
            display: flex;
            align-items: center;
            justify-content: center;
            color: white;
            transition: .5s;
            transform-origin: 11px 55px;
            transform: scale(0);
            z-index: -1;
        }
       
        &:hover li:nth-child(2) {
            transform: scale(1) rotate(-180deg) ;
        }
        &:hover li:nth-child(3) {
            transform: scale(1) rotate(-135deg);
        }
        &:hover li:nth-child(4) {
            transform: scale(1) rotate(-90deg);
        }
        &:hover li:nth-child(5) {
            transform: scale(1) rotate(-45deg);
        }
        &:hover li:nth-child(6) {
            transform: scale(1) rotate(0deg);
        }
    }
    
}
</style>
