<!-- <template>
  <div class="todo-item">
    <span>{{ todo.text }}</span>
    <button @click="emitDelete">삭제</button>
  </div>
</template>

<script setup>
import { defineProps, defineEmits } from "vue";

// 부모가 넘겨주는 props
const props = defineProps({
  todo: {
    type: Object,
    required: true,
  },
});

// 자식 → 부모로 이벤트 emit
const emit = defineEmits(["delete-todo"]);

function emitDelete() {
  emit("delete-todo", props.todo.id);
}
</script>

<style scoped>
.todo-item {
  display: flex;
  justify-content: space-between;
  margin-bottom: 8px;
}
</style> -->
<!-- ============= -->
<template>
  <div class="todo-item">
    <template v-if="!isEditing">
      <span>{{ todo.text }}</span>
      <div class="btn-group">
        <button @click="startEdit">수정</button>
        <button @click="emitDelete">삭제</button>
      </div>
    </template>

    <template v-else>
      <!-- keyup 이벤트는 사용자가 키보드에서 손을 떼었을 때 발생하는 이벤트 -->
      <input
        v-model="editText"
        @keyup.enter="saveEdit"
        @keyup.esc="cancelEdit"
      />
      <div class="btn-group">
        <button @click="saveEdit">저장</button>
        <button @click="cancelEdit">취소</button>
      </div>
    </template>
  </div>
</template>

<script setup>
import { defineProps, defineEmits, ref } from "vue";

const props = defineProps({
  todo: {
    type: Object,
    required: true,
  },
});

const emit = defineEmits(["delete-todo", "update-todo"]);

const isEditing = ref(false);
const editText = ref("");

function startEdit() {
  isEditing.value = true;
  editText.value = props.todo.text;
}

function saveEdit() {
  if (editText.value.trim() === "") {
    cancelEdit();
    return;
  }
  emit("update-todo", {
    id: props.todo.id,
    text: editText.value,
  });
  isEditing.value = false;
}

function cancelEdit() {
  isEditing.value = false;
  editText.value = "";
}

function emitDelete() {
  emit("delete-todo", props.todo.id);
}
</script>

<style scoped>
.todo-item {
  display: flex;
  justify-content: space-between;
  align-items: center;
  background: #f9f9f9;
  padding: 10px;
  margin-bottom: 8px;
  border-radius: 4px;
}

.todo-item input {
  flex: 1;
  margin-right: 10px;
  padding: 5px;
  font-size: 14px;
}

.btn-group {
  display: flex;
  gap: 5px;
}

.btn-group button {
  background-color: #4caf50;
  border: none;
  color: white;
  padding: 4px 8px;
  font-size: 12px;
  cursor: pointer;
  border-radius: 3px;
}

.btn-group button:nth-child(2) {
  background-color: #f44336;
}

.btn-group button:hover {
  opacity: 0.8;
}
</style>
