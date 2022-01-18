<template>
  <h1>这是<i>VUE</i>的根组件</h1>
  <h3>{{ username }}</h3>
  <hr />
  <p>count的值是: {{ count }}</p>
  <button @click="addBtn">+1</button>

  <hr />
  <my-swiper></my-swiper>

  <hr />
  <my-test></my-test>

  <hr>
  <my-search></my-search>
</template>

<script>
import Search from "./components/privateReg/Search.vue";
export default {
  name: "Myapp",
  data() {
    return {
      username: "zs",
      count: 0,
    };
  },
  components: {
    "my-search": Search,
  },
  methods: {
    addBtn() {
      this.count++;
    },
  },
};
</script>

<style lang="less">
h1 {
  color: red;
  i {
    color: blue;
  }
}
</style>
