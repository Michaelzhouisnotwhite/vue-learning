<template>
  <div>
    <post-info></post-info>
    <get-info></get-info>
  </div>
</template>

<script>
import GetInfo from './Getinfo.vue'
import PostInfo from './PostInfo.vue'
export default {
  name:'MyApp',
  components:{
    GetInfo,
    PostInfo
  }
}
</script>

<style>

</style>