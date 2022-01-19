<template>
  <div class="button-container mt-3">
    <div class="btn-group">
      <button
        type="button"
        class="btn"
        :class="activateButtonById(0)"
        @click="onBtnClick(0)"
      >
        全部
      </button>
      <button
        type="button"
        class="btn"
        :class="activateButtonById(1)"
        @click="onBtnClick(1)"
      >
        已完成
      </button>
      <button
        type="button"
        class="btn"
        :class="activateButtonById(2)"
        @click="onBtnClick(2)"
      >
        未完成
      </button>
    </div>
  </div>
</template>

<script>
export default {
  name: "TodoButton",
  props: {
    active: {
      type: Number,
      required: true,
      // 默认激活索引值为 0 的按钮（全部：0，已完成：1，未完成：2）
      default: 0,
    },
  },
  emits: ["update:active"],
  methods: {
    activateButtonById(id) {
      if (this.active === id) {
        return " btn-primary";
      } else {
        return "btn-secondary";
      }
    },
    onBtnClick(id) {
      if (id === this.active) {
        return;
      }
      this.$emit("update:active", id);
    },
  },
};
</script>

<style lang="less" scoped>
.button-container {
  width: 400px;
  text-align: center;
  margin: 0 auto;

}
.btn-group {
  margin: 0 auto;
}
</style>