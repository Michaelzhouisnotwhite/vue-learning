<template>
  <div>
    <h1>Props App</h1>
    <!-- v-bind属性绑定，绑定变量和表达式 -->
    <!-- 传递参数的时候驼峰命名法可以改成小写横线 -->
    <artical :title="info.title" :author="info.author" :pub-time="2012"></artical>
  </div>

</template>

    
<script>
import Artical from "./Article.vue";
export default {
  name: "PropsApp",
  components: {
    Artical,
  },
  data() {
    return {
      info:{
        title:'abc',
        author:'123'
      }
    }
  },
};
</script>

<style>
</style>