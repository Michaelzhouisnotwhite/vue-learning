<template>
  <div>
    <h3>Left Count: {{count}}</h3>
    <button type="button" class="btn btn-primary" @click="add"> + 1</button> 
  </div>
</template>

<script>
import bus from './eventBus.js'
export default {
  name:'MyLeft',
  data() {
    return {
      count:0
    }
  },
  methods: {
    add() {
      this.count++;
      bus.emit('countChange', this.count)
    }
  },
}
</script>

<style>

</style>