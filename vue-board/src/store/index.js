// src/store/index.js
import LoginForm from "@/components/LoginForm.vue";
import { createStore } from "vuex";

export default createStore({
  state: {
    // 게시글 목록 상태
    posts: [{ id: 1, title: "첫 번째 글", content: "내용입니다." }],
    //아이디 로그인
    login: [{ id: "admin", pw: "1111" }],
  },
  getters: {
    // 전체 게시글 가져오기
    getPosts(state) {
      return state.posts;
    },
    // id로 게시글 한 개 가져오기
    getPostById: (state) => (id) => {
      return state.posts.find((post) => post.id === id);
    },
  },
  mutations: {
    // 게시글 추가
    addPost(state, post) {
      state.posts.push(post);
    },
    // 🔧 게시글 수정
    updatePost(state, updatedPost) {
      const index = state.posts.findIndex((post) => post.id === updatedPost.id);
      if (index !== -1) {
        state.posts[index] = updatedPost;
      }
    },
    // ❌ 게시글 삭제
    deletePost(state, postId) {
      state.posts = state.posts.filter((post) => post.id !== postId);
    },
    LoginForm(state) {
      state.login;
    },
  },
});
