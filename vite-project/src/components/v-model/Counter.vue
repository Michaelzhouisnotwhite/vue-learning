<template>
  <div>
    <p>count: {{ number }}</p>
    <button type="button" class="btn btn-primary" @click="add">
      MyCount + 1
    </button>
  </div>
</template>

<script>
export default {
  name: "MyCounter",
  data() {
    return {};
  },
  props: ["number"],
  emits: ["update:number"],
  methods: {
    add() {
      this.$emit("update:number", this.number + 1);
      this.$emit
    },
  },
};
</script>

<style>
</style>