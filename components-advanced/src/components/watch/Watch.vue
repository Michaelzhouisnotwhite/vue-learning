<template>
  <div>
    <h3>watch 侦听器</h3>
    <input
      type="text"
      class="form-control"
      placeholder="enter a text"
      v-model.trim="info.username"
      style="width: 400px"
    />
  </div>
</template>

<script>
// import axios from 'axios'
import axios from "axios";
export default {
  name: "MyWatch",
  data() {
    return {
      username: "admin",
      info: {
        username: "admin",
        age: 20,
      },
    };
  },
  watch: {
    // async username(newVal, oldVal) {
    //   if(!newVal) return
    //   const { data: res } = await axios.get(
    //     `https://www.escook.cn/api/finduser/${newVal}`
    //   );
    //   console.log(res);
    // },

    // 组件加载完毕之后立即调用watch侦听器
    info: {
      // handler固定用法，当username变化时调用handler
      async handler(newVal, oldVal) {
        const { data: res } = await axios.get(
          `https://www.escook.cn/api/finduser/${newVal}`
        );
        console.log(res);
      },
      immediate: !true,
      deep: true,
    },
  },
  created() {
    console.log(this.info.username);
  },
};
</script>

<style>
</style>