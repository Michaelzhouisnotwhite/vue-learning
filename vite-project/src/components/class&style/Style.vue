<template>
  <div>
    <h3 :class="classObj">Style Component</h3>
    <div class="">
      <button type="button" class="btn btn-success b-4" @click="toggle_italic">
        Toggle Italic
      </button>
      <button
        type="button"
        class="btn btn-danger m-2"
        data-toggle="button"
        aria-pressed="false"
        autocomplete="off"
        @click="toggle_delete"
      >
        Toggle delete
      </button>
    </div>
  </div>
</template>

<script>
export default {
  name: "MyStyle",
  data() {
    return {
      isItalic: false,
      isDelete: false,
      classObj: {
        italic: false,
        delete: false,
      },
    };
  },
  methods: {
    toggle_italic() {
      this.isItalic = !this.isItalic;
      this.classObj.italic = !this.classObj.italic
    },
    toggle_delete() {
      this.isDelete = !this.isDelete;
      this.classObj.delete = !this.classObj.delete

    },
  },
};
</script>

<style>
.thin {
  font-style: normal;
}
.italic {
  font-style: italic;
}

.delete {
  text-decoration: line-through;
}
</style>