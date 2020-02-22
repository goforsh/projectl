<template>
  <div class='todo'>
    <div class="header">
        <div @click="toggleAll(allChecked)">❯</div>
        <input type="text" @keyup.enter="addTodo">
    </div>
    <div class="itemArea">
        <ul>
            <li v-for="(item, index) in filterList" :key="index">
                <div class="item">
                    <input :id="'check' + index" type="checkbox" v-model="item.done">
                    <label :for="'check' + index"></label>
                    <span :class="{'itemText':!item.done}">{{item.text}}</span>
                    <button @click="del(index)">X</button>
                </div>
            </li>
        </ul>
    </div>
    <div class="footer">
        <div>{{remain | remains}}  left</div>
        <ul>
            <li @click="currentFilter='all'" :class="{'bg':currentFilter=='all'}">all</li>        
            <li @click="currentFilter='left'" :class="{'bg':currentFilter=='left'}">left</li>        
            <li @click="currentFilter='done'" :class="{'bg':currentFilter=='done'}">done</li>        
        </ul>
    </div>
  </div>
</template>

<script>
export default {
  name: '',
  data(){
    return {
        list: [
            { text: 'star this repository', done: false },
            { text: 'fork this repository', done: false },
            { text: 'follow author', done: false },
            { text: 'vue-element-admin', done: true },
            { text: 'vue', done: true },
            { text: 'element-ui', done: true },
            { text: 'axios', done: true },
            { text: 'webpack', done: true }
        ],
        currentFilter: 'all'
    }
  },
  components: {},
  created(){},
  mounted(){},
  filters:{
      remains(remain) {
          if (remain === 1) {
              return remain + ' item'
          } else {
              return remain + ' items'
          }
      }
  },
  computed:{
      allChecked() {
          return this.list.every(item=>item.done)
      },
      remain() {
          return this.list.reduce((pre,item) => pre + item.done, 0)
      },
      filterList() {
          let res=[]
          switch(this.currentFilter) {
              case 'all': res = this.list;break;
              case 'left': res =  this.list.filter(item => !item.done);break;
              case 'done': res =  this.list.filter(item => item.done);break;
              default: break;
          }
          return res
      }
  },
  methods: {
      toggleAll(allChecked){
          
          this.list.forEach(item=>{
              item.done = !allChecked
          })
      },
      addTodo(e) {
          let value = e.target.value
          if (value.trim()) {
              this.list.push({
              text: value,
              done: false
            })
          }
          e.target.value = ''
      },
      del(index) {
          this.list.splice(index, 1)
      }
  }
}
</script>
<style lang='scss' scoped>
.todo {
    height: 300px;
    box-shadow: 1px 1px 10px rgba($color: #000000, $alpha: 0.5);
    background-color: #fff;
    display: flex;
    flex-direction: column;
    .header {
        flex:0 0 50px;
        width: 100%;
        border-bottom: solid 1px #ddd;
        box-shadow: 0px 1px 5px rgba($color: #ddd, $alpha: 1.0);
        display: flex;
        align-items: center;
        justify-content: space-around;
        div{
            font-size: 20px;
            font-weight: 700;
            color: gainsboro;
            transform: rotate(90deg);
            cursor: pointer;
        }
        input {
            outline: none;
            border: none;
            width: 80%;
            height: 3em;
            line-height: 2em;
        }
    }
    .itemArea {
         flex:1;
         overflow-y: scroll;
        .item {
            display: flex;
            align-items: center;
            justify-content: space-around;
            border-bottom: solid 1px #ddd;
            height: 3rem;
            font-size: 14px;
            padding: 0 12px 0;
            position: relative;
            input {
                flex: 0 0 30px;
                border: solid 1px gray;
                border-radius: 100%;
                background: none;
                opacity: 0;
            }
            input+label {
                position:absolute;
                top: 14px;
                left: 12px;
                width: 16px;
                height: 16px;
                border: 1px solid #A6A6A6;
                border-radius: 50%;
                background-color:#fff;
            } 
            input:checked+label:after {
                content: "";
                position: absolute;
                left: 2px;
                top:2px;
                width: 9px;
                height: 4px;
                border: 2px solid #424242;
                border-top-color: transparent;
                border-right-color: transparent; 
                transform: rotate(-45deg);
            }
            span {
                flex: 1;
                font-weight: 700;
            }
            .itemText {
                text-decoration: line-through;
                color: gainsboro;
            }
            button {
                flex: 0 0 30px;
                color: #cc9a9a;
                outline: none;
                border: none;
            }
        }
    }
    .footer {
        flex: 0 0 50px;
        border-bottom: solid 1px #ddd;
        box-shadow: 0px -1px 5px rgba($color: #ddd, $alpha: 1.0);    
        display: grid;
        grid-template-columns: repeat(4,1fr);
        justify-content: space-around;
        align-items: center;
        div {
            grid-column: 1 /span 1;
            justify-self: end;
            cursor: pointer;
        }
        ul {
            grid-column: 3 /span 1;
            display: flex;
            justify-content: space-around;
            align-items: center;
            cursor: pointer;
            li {
                border: solid 1px rgba(155, 89, 182, 0.3);
                padding: 1px 5px 1px;
                &:hover {
                    border-color: rgba(155, 89, 182,1.0);
                }
                &.bg {
                    background-color: rgba(155, 89, 182,.2);
                }
            }
        }
    }
}
</style>
