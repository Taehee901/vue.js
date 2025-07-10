// src/store/index.js
import { createStore } from "vuex";

export default createStore({
  //사용저장소의 속성:값정의,todos:(저장소 이름)
  state: {
    todos: [
      { id: 1, name: "Vue 공부하기", chk: false },
      { id: 2, name: "TV 시청", chk: false },
      { id: 3, name: "저녁운동", chk: false },
    ],
    title: "Hello, World",
  },
  //set,get 처럼 속성을 정의
  //getters를 쓰면 깊은 하위단계 걸치지 x,
  //this 먹지 x ->state전달값으로 부터 title 접근하는 방식으로 사용
  //getter 반환값을 읽기전용 속성값을 정의해두고 ->store정의된 값을 기능을 getters정의하고 호출해서 사용
  getters: {
    titling(state) {
      //titling 반환기능
      return state.title;
      // return this.state.title;
    },
    todoList(state) {
      return state.todos;
    },
    //state 여기서 정의되는 메소드는 얘로 정의
    //메소드 처럼 기능을 정의,
    //매개값으로 들어온 녀석을 주면됨
  },
  mutations: {
    addTodo(state, name) {
      //기능구현.
      //마지막 todos마지막 위치 값,인덱스 구하기 위해
      const id = state.todos[state.todos.length - 1].id;
      const todo = {
        id: id + 1,
        name: name,
        chk: false,
      };
      state.todos.push(todo);
    },
  },
});
