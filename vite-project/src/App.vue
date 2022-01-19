<template>
  <h1>这是VUE的根组件</h1>
  <!-- <h3>{{ username }}</h3>
  <hr />
  <p>count的值是: {{ count }}</p>
  <button @click="addBtn">+1</button>

  <hr />
  <list></list>

  <hr />
  <my-swiper></my-swiper>

  <hr />
  <my-test></my-test>

  <hr />
  <my-search></my-search> -->
</template>

<script>
import Search from "./components/privateReg/Search.vue";
import List from "./List.vue";
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
    List,
  },
  methods: {
    addBtn() {
      this.count++;
    },
  },
};
</script>

<style lang="less" scoped>
h1 {
  color: #000000;
  i {
    color: blue;
  }
}

:deep(.title) {
  color: blue;
}
</style>
