<template>
  <h1>Root App</h1>
  <hr />
  <my-style ></my-style>
</template>

<script>
import MyStyle from "./Style.vue";
export default {
  name: "MyApp",
  components: {
    MyStyle,
  },
};
</script>

<style>
</style>