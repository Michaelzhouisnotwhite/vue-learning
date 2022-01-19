<template>
  <div>
    <p>状态：{{ state }}</p>
    <p>数量：{{ count }}</p>
    <p>数量/总数：{{ rate }}</p>
    <input type="text" v-model="self_count" placeholder="input text">
  </div>
</template>

<script>
export default {
  name: "MyCount",
  data() {
    return {
      total:100,
      self_count:"",
    }
  },
  computed:{
    rate() {
      var rate = this.count / this.total
      return String(rate) + '%'
    }
  },
  props: {
    count: {
      type: Number,
      required: true,
      default: 100,
    },
    state: Boolean,
    info: [String, Number],
    type: {
      type: String,
      // 只能是validator中的值
      validator(value) {
        return ["success", "warning", "danger"].indexOf(value) !== -1;
      },
    },
  },
};
</script>

<style>
</style>