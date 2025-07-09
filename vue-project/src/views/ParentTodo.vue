<!-- <template>
  <div class="app">
    <h1>My Todo List</h1>

    <input
      v-model="newTodo"
      @keyup.enter="addTodo"
      placeholder="할 일을 입력하세요"
    />

    <TodoItem
      v-for="item in todoList"
      :key="item.id"
      :todo="item"
      @delete-todo="deleteTodo"
    />
  </div>
</template>

<script setup>
import { ref } from "vue";
import TodoItem from "./components/TodoItem.vue";

const newTodo = ref("");
const todoList = ref([]);

function addTodo() {
  if (newTodo.value.trim() === "") return;

  todoList.value.push({
    id: Date.now(), // 간단히 timestamp로 id 생성
    text: newTodo.value,
  });

  newTodo.value = "";
}

function deleteTodo(id) {
  todoList.value = todoList.value.filter((item) => item.id !== id);
}
</script>

<style scoped>
.app {
  width: 300px;
  margin: 50px auto;
  font-family: sans-serif;
}
input {
  width: 100%;
  padding: 8px;
  margin-bottom: 16px;
}
</style> -->
<!-- ===== -->
<!-- 
todoList 배열로 전체 목록관리
새 할일 추가 시 todoItem 랜더링
delete-todo이벤트를 수신해 해당 항목삭제
-->
<!-- keyup 이벤트는 사용자가 키보드에서 손을 떼었을 때 발생하는 이벤트 -->
<!-- <template>
  <div class="app">
    <h1>🌟 My Todo List</h1>
    <div class="input-box">
      <input
        v-model="newTodo"
        @keyup.enter="addTodo"
        placeholder="할 일을 입력하세요"
      />
      <button @click="addTodo">추가</button>
    </div>

    <div v-if="todoList.length === 0" class="empty">할 일이 없습니다.</div>

    <TodoItem
      v-for="item in todoList"
      :key="item.id"
      :todo="item"
      @delete-todo="deleteTodo"
      @update-todo="updateTodo"
    />
  </div>
</template>

<script setup>
import { ref } from "vue";
import TodoItem from "./TodoItem.vue";

const newTodo = ref("");
const todoList = ref([]);

function addTodo() {
  if (newTodo.value.trim() === "") return;

  todoList.value.push({
    id: Date.now(),
    text: newTodo.value.trim(),
  });

  newTodo.value = "";
}

function deleteTodo(id) {
  todoList.value = todoList.value.filter((item) => item.id !== id);
}

function updateTodo(updatedItem) {
  const index = todoList.value.findIndex((item) => item.id === updatedItem.id);
  if (index !== -1) {
    todoList.value[index].text = updatedItem.text;
  }
}
</script>

<style scoped>
.app {
  max-width: 400px;
  margin: 50px auto;
  font-family: "Segoe UI", sans-serif;
  background: #fff;
  padding: 20px;
  border-radius: 8px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
}

h1 {
  text-align: center;
  margin-bottom: 20px;
  color: #333;
}

.input-box {
  display: flex;
  gap: 10px;
  margin-bottom: 20px;
}

.input-box input {
  flex: 1;
  padding: 8px;
  border: 1px solid #ddd;
  border-radius: 4px;
  font-size: 14px;
}

.input-box button {
  background-color: #2196f3;
  border: none;
  color: white;
  padding: 8px 12px;
  font-size: 14px;
  border-radius: 4px;
  cursor: pointer;
}

.input-box button:hover {
  opacity: 0.9;
}

.empty {
  text-align: center;
  color: #888;
  margin-top: 30px;
}
</style> -->
<template>
  <div class="app">
    <h1>🌟 My Todo List</h1>

    <div class="input-box">
      <input
        v-model="newTodo"
        @keyup.enter="addTodo"
        placeholder="할 일을 입력하세요"
      />
      <button @click="addTodo">추가</button>
    </div>
    <!-- 값과 값의 종류가 모두 같은지 확인 ==== -->
    <div v-if="todoList.length === 0" class="empty">할 일이 없습니다.</div>

    <TodoItem
      v-for="item in todoList"
      :key="item.id"
      :todo="item"
      @delete-todo="deleteTodo"
      @update-todo="updateTodo"
    />
  </div>
</template>

<script>
import TodoItem from "./TodoItem.vue";

export default {
  name: "App",
  components: {
    TodoItem,
  },
  data() {
    return {
      newTodo: "",
      todoList: [],
    };
  },
  methods: {
    addTodo() {
      if (this.newTodo.trim() === "") return;

      this.todoList.push({
        id: Date.now(),
        text: this.newTodo.trim(),
      });
      this.newTodo = "";
    },
    deleteTodo(id) {
      this.todoList = this.todoList.filter((item) => item.id !== id);
    },
    updateTodo(updatedItem) {
      const index = this.todoList.findIndex(
        (item) => item.id === updatedItem.id
      );
      if (index !== -1) {
        this.todoList[index].text = updatedItem.text;
      }
    },
  },
};
</script>

<style scoped>
.app {
  max-width: 400px;
  margin: 50px auto;
  font-family: "Segoe UI", sans-serif;
  background: #fff;
  padding: 20px;
  border-radius: 8px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
}

h1 {
  text-align: center;
  margin-bottom: 20px;
  color: #333;
}

.input-box {
  display: flex;
  gap: 10px;
  margin-bottom: 20px;
}

.input-box input {
  flex: 1;
  padding: 8px;
  border: 1px solid #ddd;
  border-radius: 4px;
  font-size: 14px;
}

.input-box button {
  background-color: #2196f3;
  border: none;
  color: white;
  padding: 8px 12px;
  font-size: 14px;
  border-radius: 4px;
  cursor: pointer;
}

.input-box button:hover {
  opacity: 0.9;
}

.empty {
  text-align: center;
  color: #888;
  margin-top: 30px;
}
</style>
