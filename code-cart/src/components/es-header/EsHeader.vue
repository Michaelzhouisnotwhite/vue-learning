<template>
  <div
    class="header-container"
    :style="{ color: color, backgroundColor: bgcolor, fontSize: fsize + 'px' }"
  >
    {{ title }}
  </div>
</template>

<script>
export default {
  name: "EsHeader",
  props: {
    title: {
      type: String,
      default: "es-header",
    },
    bgcolor: {
      type: String,
      default: "#007BFF",
    },
    // 文字颜色
    color: {
      type: String,
      default: "#ffffff",
    },
    fsize: {
      type: Number,
      default: 12,
    },
  },
};
</script>

<style lang='less' scoped>
.header-container {
  height: 45px;
  line-height: 45px;
  text-align: center;
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  z-index: 999;
}
</style>