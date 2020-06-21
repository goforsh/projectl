<template>
    <el-row :gutter="32" class="panel">
        <el-col :xs="12" :sm="12" :lg="6"  v-for="(item,i) in svgName" :key="i">
            <div class="card">
                <div :class="['icon-wrapper','icon-'+item.name]">
                    <svg-icon :icon-class="item.name" :class="['icon',item.name]"/>   
                </div>
                <div class="cardText">
                    <div class="title">{{item.name[0].toUpperCase() + item.name.slice(1)}}</div>
                    <count 
                        :start-val="0" 
                        :end-val="item.value" 
                        :duration="2600" 
                        class="num"/>   
                </div>
            </div>
        </el-col>
    </el-row>
</template>

<script>
import count from 'vue-count-to'
export default {
  name: 'panel',
  components: {
    count
  },
  data () {
    return {
        svgName: [
            {
                name:'peoples', 
                value:180
            },
            {
                name:'message', 
                value:1180
            },
            {
                name:'money', 
                value:111180
            },
            {
                name:'shopping', 
                value:1111180
            }
        ]
    }
  }
}
</script>

<style lang="scss">
    .card {
        display: flex;
        height: 80px;
        cursor: pointer;
        background-color: white;
        padding: 18px;
        border-radius: 2%;
        justify-content: space-around;
        align-items: center;
        &:hover {
            .icon {
                color: #fff!important;
            }
            .icon-peoples {
                background: #40c9c6;
            }
            .icon-message {
                background: #36a3f7;
            }
            .icon-money {
                background: #f4516c;
            }
            .icon-shopping {
                background: #34bfa3
            }
        }
        .icon-wrapper {
            margin: 14px 0 14px;
            padding: 16px;
            transition: all 0.38s ease-out;
            border-radius: 6px;
            .icon {
            font-size: 50px;
                &.peoples {
                    color: #40c9c6;
                }
                &.message {
                    color: #36a3f7;
                }
                &.money {
                    color: #f4516c;
                }
                &.shopping {
                    color: #34bfa3;
                }
            }
        }
        .cardText {
            font-size: 18px;
            .title {
                line-height: 18px;
                color: rgba(0, 0, 0, 0.45);
                margin-bottom: 12px;
            }
            .num {
                font-size: 25px;
            }
        }
    }
</style>
