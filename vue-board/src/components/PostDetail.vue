<template>
  <div v-if="post">
    <h2>{{ post.title }}</h2>
    <p>{{ post.content }}</p>

    <!-- 수정 & 삭제 버튼 -->
    <div class="button-group">
      <button @click="goToEdit">수정</button>
      <button @click="deletePost">삭제</button>
    </div>
    <router-link to="/">← 목록으로</router-link>
  </div>
  <div v-else>
    <p>게시글을 찾을 수 없습니다.</p>
  </div>
</template>

<script>
import { mapGetters } from "vuex";

export default {
  name: "PostDetail",
  props: ["id"],
  computed: {
    ...mapGetters(["getPostById"]),
    post() {
      return this.getPostById(Number(this.id));
    },
  },
  methods: {
    // 수정 페이지로 이동
    goToEdit() {
      this.$router.push({ name: "EditPost", params: { id: this.id } });
    },
    // 게시글 삭제
    deletePost() {
      if (confirm("정말 삭제하시겠습니까?")) {
        this.$store.commit("deletePost", Number(this.id));
        this.$router.push("/");
      }
    },
    //관리자페이지 이동
    adminForm() {},
  },
};
</script>

<style scoped>
.button-group {
  margin: 20px 0;
}
button {
  margin-right: 10px;
}
</style>
