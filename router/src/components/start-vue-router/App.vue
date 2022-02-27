<template>
  <div>
    <h1>App 根组件</h1>
    <hr />

    <!-- hash地址会自动加# -->
    <router-link to="/home">首页</router-link>
    <router-link to="/movie">电影</router-link>
    <router-link to="/about">关于</router-link>

    <hr />
    <router-view></router-view>
  </div>
</template>

<script>
import MyHome from "./MyHome.vue";
import MyMovie from "./MyMovie.vue";
import MyAbout from "./MyAbout.vue";
export default {
  name: "App",
  data() {
    return {
      comName: "MyHome",
    };
  },
  components: {
    MyHome,
    MyMovie,
    MyAbout,
  },
};
</script>

<style scoped>
a {
  margin-left: 12px;
}
.router-link-active {
  background-color: red;
}
.active-router{
  background-color: burlywood;
}
</style>