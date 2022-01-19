<template>
<div>
  <h1>根组件</h1>
  <hr />
  <my-count :count="99" :state="true" info="abc" type="warning"></my-count>
</div>
</template>

<script>
import Count from './Count.vue'
export default {
  name:'MyApp',
  components:{
    'MyCount':Count
  }
}
</script>

<style>

</style>