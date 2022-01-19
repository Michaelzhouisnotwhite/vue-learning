<template>
  <div>
    <p>count: {{ count }}</p>
    <button type="button" class="btn btn-primary" @click="add">+ 1</button>
  </div>
</template>

<script>
export default {
  name: "MyCounter",
  data() {
    return {
      count: 0,
    };
  },
  methods: {
    add() {
      this.count++;
      // 触发自定义事件
      this.$emit("countChange", this.count);
    },
  },
  // 声明自定义事件
  emits: ["countChange"],
};
</script>

<style>
</style>