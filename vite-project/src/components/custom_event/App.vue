<template>
  <div>
    <h1>Root</h1>
    <hr>
    <my-counter @countChange="getCount"></my-counter>
  </div>
</template>

<script>
import MyCounter from './Counter.vue'
export default {
  name:'MyApp',
  components:{
    MyCounter,
  },
  methods: {
    getCount(val) {
      console.log('触发countChange自定义事件', val)  
    }
  },
}
</script>

<style>

</style>