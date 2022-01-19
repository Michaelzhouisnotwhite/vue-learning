<template>
  <div>
    <h1>Root ---- {{count}}</h1>
    <hr>
    <button type="button" class="btn btn-primary" @click="add">App + 1</button>
    <my-counter v-model:number="count"></my-counter>
  </div>
</template>

<script>
import MyCounter from './Counter.vue'
export default {
  name:'MyApp',
  data() {
    return {
      count:0,
    }
  },
  components:{
    MyCounter,
  },
  methods: {
    add() {
      this.count++;
    }
  },
}
</script>

<style>

</style>