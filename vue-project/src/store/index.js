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
    title: "",
  },
});
