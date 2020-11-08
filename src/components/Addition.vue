<template>
  <div>
    <!-- <p>当前最新的Count值为:{{$store.state.count}}</p> -->
    <p>{{$store.getters.showNum}}</p>
    <button @click="btnHandeler1">+1</button>
    <button @click="btnHandeler2">+N</button>
    <button @click="btnHandeler3">Async +1</button>
    <button @click="btnHandeler4">Async +N</button>
  </div>
</template>


<script>
export default {
  data() {
    return {

    }
  },
  methods: {
    btnHandeler1(){
      this.$store.commit('add')
    },
    btnHandeler2(){
      this.$store.commit('addN',3)
    },
    btnHandeler3(){
      this.$store.dispatch('addAsync')
    },
    btnHandeler4(){
      this.$store.dispatch('addNAsync',5)
    }
    
  },
}
</script>

<style scoped>
</style>