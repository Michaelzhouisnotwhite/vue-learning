<template>
  <div>
    <h1 ref="myh1">App 根组件</h1>
    <hr />
    <button type="button" class="btn btn-primary" @click="getRef">
      获取$ref引用
    </button>

    <my-counter ref="mycounter"></my-counter>
  </div>
</template>

<script>
import MyCounter from "./Counter.vue";
export default {
  name: "MyApp",
  components: {
    MyCounter,
  },
  data() {
    return {
      isRed: false,
    };
  },
  methods: {
    getRef() {
      console.log(this.$refs)
      console.log(this.$refs.myh1.innerText);
      this.$refs.myh1.style.color = this.isRed ? "red" : "";
      this.isRed = !this.isRed;
      this.$refs.mycounter.add();
    },
  },
};
</script>

<style>
</style>