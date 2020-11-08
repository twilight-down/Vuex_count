<template>
<div>
  <!-- <p>当前最新的Count值为:{{count}}</p> -->
  <p>{{showNum}}</p>
  <button @click="btnHandeler1">-1</button>
  <button @click="btnHandeler2">-N</button>
  <button @click="btnHandeler3">-1 async</button>
  <button @click="subNAsync(5)">-N async</button>


</div>
</template>


<script>
import {mapState , mapMutations, mapActions,mapGetters} from 'vuex'
export default {
  data(){
    return{

    }
  },
  methods:{
    ...mapMutations(['sub','subN']),
    ...mapActions(['subAsync','subNAsync']),
    btnHandeler1(){
      this.sub()
    },
    btnHandeler2(){
      this.subN(3)
    },
    btnHandeler3(){
      this.subAsync()
    }

    

  },
  computed:{
    ...mapState(['count']),
    ...mapGetters(['showNum'])
  }
}
</script>

<style scoped>

</style>