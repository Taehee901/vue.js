// src/router/index.js
import { createRouter, createWebHistory } from "vue-router";
import PostList from "../components/PostList.vue";
import PostDetail from "../components/PostDetail.vue";
import PostForm from "../components/PostForm.vue";
import LoginForm from "@/components/LoginForm.vue";
// 라우터 설정
// URL 파라미터를 props로 전달,props:true
const routes = [
  { path: "/", name: "PostList", component: PostList },
  { path: "/post/:id", name: "PostDetail", component: PostDetail, props: true },
  { path: "/create", name: "PostForm", component: PostForm },
  { path: "/edit/:id", name: "EditPost", component: PostForm, props: true }, // ✨ 수정 모드
  { path: "/login/", name: "LoginForm", component: LoginForm },
];

// createRouter로 라우터 생성
const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
