<template>
  <div>
    <h1>App Root</h1>
    <hr>
    <router-link to="/home">首页</router-link>
    <router-link to="/main">后台主页</router-link>
    <hr>
    <router-view></router-view>
  </div>
</template>

<script>
import MyHome from "./Home.vue";
import MyMain from "./Main.vue";
import MyLogin from "./Login.vue";
export default {
  name: "App",
  components: {
    MyHome,
    MyMain,
    MyLogin,
  },
};
</script>

<style>
a {
  margin-left: 10px;
}
</style>