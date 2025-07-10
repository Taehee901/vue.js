<template>
  <div>
    <h2>게시글 목록</h2>
    <ul>
      <!-- 게시글 리스트 출력 -->
      <li v-for="post in posts" :key="post.id">
        <!-- 게시글 클릭 시 상세 페이지로 이동 -->
        <router-link :to="`/post/${post.id}`">
          {{ post.title }}
        </router-link>
      </li>
    </ul>
  </div>
</template>

<script>
import { mapGetters } from "vuex";

export default {
  name: "PostList",
  computed: {
    // Vuex에서 getters 가져오기
    ...mapGetters(["getPosts"]),
    posts() {
      return this.getPosts;
    },
  },
};
</script>
