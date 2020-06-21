<template>
  <el-table :data="list" max-height="300" class="table">
    <el-table-column label="游戏" min-width="200">
      <template slot-scope="games">
        {{games.row.name | nameFilter}}
      </template>
    </el-table-column>
    <el-table-column label="价格" width="100">
      <template slot-scope="games">
        {{games.row.price}}
      </template>
    </el-table-column>
    <el-table-column label="已购" width="100">
      <template slot-scope="games">
        <el-tag :type="games.row.state | typeFilter">
          {{games.row.state | stateFilter}}
        </el-tag>
      </template>
    </el-table-column>
  </el-table>
</template>

<script>
export default {
  name: '',
  data(){
    return {
      list:[
        {
          name: 'helldivers',
          price: 112,
          state: true
        },
        {
          name: 'monsterhunter',
          price: 133,
          state: false
        },
        {
          name: 'ibbobb',
          price: 45,
          state: true
        },
        {
          name: 'sekoro',
          price: 268,
          state: false
        },
        {
          name: 'deadstripe',
          price: 300,
          state: false
        }
      ]
    }
  },
  filters: {
    nameFilter(name) {
      return 'PC '+name
    },
    stateFilter(state) {
      return state ? '买了' : '还没'
    },
    typeFilter(state) {
      return state ? 'success' : 'warning'
    }
  },
  components: {},
  created(){},
  mounted(){},
  methods: {}
}
</script>
<style lang='scss' scoped>
.table {
}
</style>
