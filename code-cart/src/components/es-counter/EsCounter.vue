<template>
  <div class="counter-container">
    <!-- 数量 -1 按钮 -->
    <button type="button" class="btn btn-light btn-sm" @click="onSubClick">
      -
    </button>
    <!-- 输入框 -->
    <input
      type="number"
      class="form-control form-control-sm iptnum"
      v-model.number.lazy="number"
    />
    <!-- 数量 +1 按钮 -->
    <button type="button" class="btn btn-light btn-sm" @click="onAddClick">
      +
    </button>
  </div>
</template>

<script>
export default {
  name: "EsCounter",
  props: {
    num: {
      type: Number,
      default: 0,
    },
    min: {
      type: Number,
      default: NaN,
    },
  },
  data() {
    return {
      number: this.num,
    };
  },
  methods: {
    // -1 按钮的事件处理函数
    onSubClick() {
      if (!isNaN(this.min) && this.number - 1 < this.min) return;
      this.number -= 1;
    },
    // +1 按钮的事件处理函数
    onAddClick() {
      this.number += 1;
    },
  },
  watch: {
    number(newVal) {
      // 1. 将输入的新值转化为整数
      const parseResult = parseInt(newVal);
      // 2. 如果转换的结果不是数字，或小于1，则强制 number 的值等于1
      if (isNaN(parseResult) || parseResult < 1) {
        this.number = 1;
        return;
      }
      // 3. 如果新值为小数，则把转换的结果赋值给 number
      if (String(newVal).indexOf(".") !== -1) {
        this.number = parseResult;
        return;
      }
      this.$emit("numChange", this.number);
    },
  },
  emits: ["numChange"],
};
</script>

<style lang="less" scoped>
.counter-container {
  display: flex;
  // 按钮的样式
  .btn {
    width: 25px;
  }
  // 输入框的样式
  .ipt-num {
    width: 34px;
    text-align: center;
    margin: 0 4px;
  }
  .form-control-sm {
    width: 34px;
    text-align: center;
  }
}
</style>