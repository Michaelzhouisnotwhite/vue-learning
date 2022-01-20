<template>
  <div>
    <h1>根组件</h1>

  <my-watch></my-watch>
  </div>
</template>

<script>
import MyWatch from './Watch.vue'
export default {
  name:'MyApp',
  components:{
    MyWatch,
  },
  watch:{
    
  }
}
</script>

<style>

</style>