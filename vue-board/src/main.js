// src/main.js
// Vue 애플리케이션 생성
import { createApp } from "vue";
// Vuex 스토어 등록
import App from "./App.vue";
// Vue Router 등록
import store from "./store";
// 앱 마운트
import router from "./router";

createApp(App).use(store).use(router).mount("#app");
