<template>
  <div class='main'>
      <panel style="margin-bottom:18px"/>
      <el-row class="row" >
        <lineCharts/>
      </el-row>
      <el-row :gutter="32">
        <el-col :xs="24" :sm="24" :lg="8">
          <transaction class="item"/>
        </el-col>
        <el-col :xs="24" :sm="24" :lg="8">
          <todo class="item"/>
        </el-col>
        <el-col :xs="24" :sm="24" :lg="8">
          <cardPro class="item"/>
        </el-col>
      </el-row>

  </div>
</template>

<script>
import panel from 'src/components/main/panel'
import lineCharts from 'src/components/main/lineCharts'
import transaction from 'src/components/main/transaction'
import todo from 'src/components/main/todo'
import cardPro from 'src/components/main/cardPro'
export default {
  name: '',
  data(){
    return {}
  },
  components: {
    panel,
    lineCharts,
    transaction,
    todo,
    cardPro
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
    .row {
      background-color: #fff;
      margin-bottom: 18px;
      .item {
      }
    }
  }
</style>
