<template>
  <div>
    <h3>Right Count: {{count}}</h3>
  </div>
</template>

<script>
import bus from './eventBus.js'
export default {
  data() {
    return {
      count:0
    }
  },
  created() {
    bus.on('countChange', (count) =>{
      this.count = count
    })
  },
}
</script>

<style>

</style>