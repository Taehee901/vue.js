<!-- <template>
  <div>
    <h2 style="margin: 5px">My To Do List</h2>
    <input type="text" placeholder="Title..." />
    <button  v-on:click="clickEvt">Add</button>
  </div>
  <ul id="myUL">
    <li
      v-bind:key="clis.id"
      v-for="clis in todoList"
      v-bind:class="{{ checked: clis.chk }}"
      v-on:click="Listclick(clis.id)"
    >
      {{ clis.name }}
    </li>
    <span>
  </ul>
</template>
<script>
export default {
  data() {
    return {
      msg: "",
      todoList: [
        { id: 1, name: "hit", chk: false },
        { id: 2, name: "hit", chk: false },
        { id: 3, name: "hit", chk: false },
      ],
    };
  },
  methods: {
    clickEvt() {
      let nlis = this.todoList.name;
      console.log(nlis);
    },
  },
};
</script>
<style></style> -->
<!-- 집에서 다시 해야함-->
