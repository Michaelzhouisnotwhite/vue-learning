<template>
  <div>
    <h3>Get 请求</h3>
    <hr />

    <button type="button" class="btn btn-success" @click="getInfo">
      发起get请求
    </button>
  </div>
</template>

<script>
export default {
  name: "PostInfo",
  methods: {
    async getInfo() {
      const { data: res } = await this.$http.get(
        "https://my-json-server.typicode.com/Michaelzhouisnotwhite/Json-Server/users",
        {
          params: { username: "Tom" },
        }
      );
      console.log(res);
    },
  },
};
</script>

<style>
</style>