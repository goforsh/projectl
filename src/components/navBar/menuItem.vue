<script>
export default {
  name: 'menuItem',
  functional:true,
  props:['title','icon'],
  render(h,context){
    let vnodes=[]
    const {title, icon} = context.props

    if (icon) {
      vnodes.push(<i class={icon}></i>)
    }

    if (title) {
      vnodes.push(<span slot='title'>{title}</span>)
    }
    

    return vnodes
  },
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
</style>
