<template>
  <div class="app-container">
    <h1>Myheader Root Component</h1>
    <hr>
    <my-header title="自定义title" bgcolor="blue" color="white"></my-header>
  </div>
</template>

<script>
import Header from './Header.vue'
export default {
  name:'MyApp',
  components:{
    MyHeader: Header,
  }
}
</script>

<style lang="less" scoped>
.app-container{
  margin-top: 45px;
}
</style>