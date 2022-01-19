<template>
  <form class="form-inline" @submit.prevent="onFormSubmit">
    <!-- <div class="container"> -->
    <div class="input-group mb-2 mr-sm-2">
      <!-- 输入框前缀 -->
      <div class="input-group-prepend">
        <div class="input-group-text">任务</div>
      </div>
      <!-- 文本输入框 -->
      <input
        type="text"
        class="form-control"
        id="inlineFormInputGroupUsername2"
        placeholder="请填写任务信息"
        v-model.trim="taskname"
        style="width: 356px"
      />
    </div>
    <!-- 添加新任务按钮 -->
    <button type="submit" class="btn btn-primary mb-2">添加新任务</button>
    <!-- </div> -->
  </form>
</template>

<script>
export default {
  name: "TodoInput",
  emits: ["add"],
  data() {
    return {
      taskname: "",
    };
  },
  methods: {
    onFormSubmit() {
      if (!this.taskname) return alert("任务名称不能为空");
      this.$emit("add", this.taskname);
      this.taskname = "";
    },
  },
};
</script>

<style lang='less' scoped>
.form-inline {
  display: flex;
  flex-flow: row wrap;
  align-items: center;
  justify-content: center;
}
</style>