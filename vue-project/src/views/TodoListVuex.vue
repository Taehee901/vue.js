<template>
  <h3>Vuex 사용하기</h3>
  <div id="myDIV" class="header">
    <h2 style="margin: 5px">My To Do List</h2>
    <!-- 페이지이동 prevent:기본기능차단. -->
    <form @submit.prevent="addNewTodo">
      <input type="text" v-model="msg" placeholder="Title..." />
      <!-- input,button...등등 -->
      <button type="submit">추가</button>
    </form>
  </div>
  <ul id="myUL">
    <li v-bind:key="todo.id" v-for="todo in allTodos">
      {{ todo.name }}
    </li>
  </ul>
</template>
<script>
export default {
  //함수 등을 사용x
  data() {
    return {
      msg: "",
      // allTodos: [],
    };
  },
  //계산된속성,mounted사용하기 싫으면
  computed: {
    allTodos() {
      return this.$store.getters.todoList;
    },
  },
  methods: {
    addNewTodo() {
      //msg 추가.
      //2.mutations에 정의된 함수 호출 방식: 1.정의된메소드 2.전달할 매개값
      //msg추가. 저장소의 mutations(기능정의)호출
      this.$store.commit("addTodo", this.msg);
      //1.직접저장소에 this.$.. 로 저장해도 되지만 -> 컴포넌트가 많을 경우 혼란
    },
  },

  //데이터속성을 가져오는 방식
  mounted() {
    //vuex를 사용하면 만들어지는게 $store인데 접근가능
    // console.log(this.$store._state.data.title);
    //getters 데이터를 쉽게 가져오기위한,현재는 저장소
    // console.log(this.$store.getters.titling);
    // console.log(this.$store.getters.todoList); //마운틴되는시점값

    console.log(this.$store);
    //크리에이트훅:컴포넌트가 만들어질 때 실행되는 훅 업데이트훅:컴포넌트가 데이터 갱신될 때 마운틴훅:컴포넌트가 DOM에 올라간 직후,마운틴되는시점에 정보를 가져옴?
    // this.allTodos = this.$store.getters.todoList; //저장소에서...
    // this.msg = this.$store.getters.myTitle;
  },
  updated() {
    console.log(this.$store);
  },
};
</script>
<style scoped>
body {
  margin: 0;
  min-width: 250px;
}

/* Include the padding and border in an element's total width and height */
* {
  box-sizing: border-box;
}

/* Remove margins and padding from the list */
ul {
  margin: 0;
  padding: 0;
}

/* Style the list items */
ul li {
  cursor: pointer;
  position: relative;
  padding: 12px 8px 12px 40px;
  list-style-type: none;
  background: #eee;
  font-size: 18px;
  transition: 0.2s;

  /* make the list items unselectable */
  -webkit-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  user-select: none;
}

/* Set all odd list items to a different color (zebra-stripes) */
ul li:nth-child(odd) {
  background: #f9f9f9;
}

/* Darker background-color on hover */
ul li:hover {
  background: #ddd;
}

/* When clicked on, add a background color and strike out text */
ul li.checked {
  background: #888;
  color: #fff;
  text-decoration: line-through;
}

/* Add a "checked" mark when clicked on */
ul li.checked::before {
  content: "";
  position: absolute;
  border-color: #fff;
  border-style: solid;
  border-width: 0 2px 2px 0;
  top: 10px;
  left: 16px;
  transform: rotate(45deg);
  height: 15px;
  width: 7px;
}

/* Style the close button */
.close {
  position: absolute;
  right: 0;
  top: 0;
  padding: 12px 16px 12px 16px;
}

.close:hover {
  background-color: #f44336;
  color: white;
}

/* Style the header */
.header {
  background-color: #f44336;
  padding: 30px 40px;
  color: white;
  text-align: center;
}

/* Clear floats after the header */
.header:after {
  content: "";
  display: table;
  clear: both;
}

/* Style the input */
input {
  margin: 0;
  border: none;
  border-radius: 0;
  width: 75%;
  padding: 10px;
  float: left;
  font-size: 16px;
}

/* Style the "Add" button */
.addBtn {
  padding: 10px;
  width: 25%;
  background: #d9d9d9;
  color: #555;
  float: left;
  text-align: center;
  font-size: 16px;
  cursor: pointer;
  transition: 0.3s;
  border-radius: 0;
}

.addBtn:hover {
  background-color: #bbb;
}
</style>
