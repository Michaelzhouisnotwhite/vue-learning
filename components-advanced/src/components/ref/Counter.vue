<template>
  <div class="counter-container">
    <h3>Counter 组件 --- {{ count }}</h3>
    <hr />
    <button type="button" class="btn btn-info" @click="add">+1</button>
  </div>
</template>

<script>
export default {
  name: "MyCounter",
  methods: {
    add() {
      this.count++;
    },
  },
  data() {
    return {
      count: 0,
    };
  },
};
</script>

<style>
</style>