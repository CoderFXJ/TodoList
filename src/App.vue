<template>
  <div id="app">
    <TodoList/>
    <router-view/>
  </div>
</template>

<script>
import Vue from 'vue'
export default {
  name:'App',
  components:{
    TodoList:()=>import('./views/TodoList.vue')
  },
  beforeCreate(){
    Vue.prototype.$bus = this
  }
}
</script>

<style lang="scss">
 @import url('//at.alicdn.com/t/font_2851497_pl3kf6ogwc8.css');
 *{
   font-family:Courier ;
   
 }
</style>
