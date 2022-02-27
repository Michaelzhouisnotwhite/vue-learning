<template>
  <div>
    <h1>根组件</h1>

    <a href="#/Home">Home</a>

    <a href="#/About">About</a>

    <a href="#/Movie">Movie</a>
    <hr />
    <component :is="comName"></component>
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
  created() {
    window.onhashchange = () => {
      switch (location.hash) {
        case "#/Home":
          this.comName = "MyHome";
          break;
        case "#/About":
          this.comName = "MyAbout";
          break;
        case "#/Movie":
          this.comName = "MyMovie";
          break;
        default:
          break;
      }
    };
  },
  components: {
    MyHome,
    MyMovie,
    MyAbout,
  },
};
</script>
<style lang="less" scoped>
a {
  margin-left: 12px;
}
</style>