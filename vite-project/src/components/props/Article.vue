<template>
  <div>
    <h3>name: {{ title }}</h3>
    <h3>author: {{ author }}</h3>
    <h3>publish time: {{ pubTime }}</h3>
  </div>
</template>

<script>
export default {
  name: "Artical",
  props: ["title", "author", "pubTime"],
  data() {
    return {
      isItalic: true,
    };
  },
};
</script>

<style>
</style>