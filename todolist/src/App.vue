<template>
  <div id="title" class="container">
    <todo-input @add="onAddNewTask"></todo-input>
    <todo-list :list="tasklist" class="mt-2"></todo-list>
    <todo-button v-model:active="activateBtnIndex"></todo-button>
  </div>
</template>

<script>
import TodoList from "./components/todo-list/TodoList.vue";
import TodoInput from "./components/todo-list/TodoInput.vue";
import TodoButton from "./components/todo-list/TodoButton.vue";
export default {
  name: "MyApp",
  data() {
    return {
      todolist: [
        { id: 1, task: "周一早晨9点开会", done: false },
        { id: 2, task: "周一晚上8点聚餐", done: false },
        { id: 3, task: "准备周三上午的演讲稿", done: true },
      ],
      activateBtnIndex: 0,
      nextId: 4,
    };
  },
  methods: {
    onAddNewTask(taskname) {
      this.todolist.push({
        id: this.nextId,
        task: taskname,
        done: false,
      });
      this.nextId++;
    },
  },
  components: {
    TodoList,
    TodoInput,
    TodoButton,
  },
  computed: {
    tasklist() {
      switch (this.activateBtnIndex) {
        case 0:
          return this.todolist;
        case 1:
          return this.todolist.filter((x) => x.done);
        case 2:
          return this.todolist.filter((x) => !x.done);
        default:
          break;
      }
    },
  },
};
</script>

<style lang="less" scoped>
#title {
  text-align: center;
}
</style>