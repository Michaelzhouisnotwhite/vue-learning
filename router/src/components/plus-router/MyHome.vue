<template>
  <div>
    <h3>Home 组件</h3>
    <hr />
    <button type="button" class="btn btn-primary" @click="goToMovie(3)">
      导航到movie页面
    </button>

    <router-link :to="{ name: 'mov', params: { id: 2 } }">
      命名路由跳转
    </router-link>

    <button type="button" class="btn btn-primary ml-2" @click="goToMovie2(1)">
      编程式路由跳转
    </button>
  </div>
</template>

<script>
export default {
  name: "MyHome",
  methods: {
    goToMovie(id) {
      this.$router.push("/movie/" + id);
    },
    goToMovie2(id) {
      this.$router.push({
        name: "mov",
        params: {
          id: 2,
        },
      });
    },
  },
};
</script>

<style>
</style>