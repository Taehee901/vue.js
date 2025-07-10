<template>
  <div>
    <h2>글 작성</h2>
    <form @submit.prevent="submitPost">
      <div>
        <label>제목</label>
        <!-- v-model로 양방향 바인딩 -->
        <input v-model="title" required />
      </div>
      <div>
        <label>내용</label>
        <textarea v-model="content" required></textarea>
      </div>
      <button type="submit">등록</button>
    </form>
  </div>
</template>

<script>
export default {
  name: "PostForm",
  data() {
    return {
      title: "",
      content: "",
    };
  },
  methods: {
    submitPost() {
      // 새 글 생성
      const newPost = {
        id: Date.now(),
        title: this.title,
        content: this.content,
      };
      this.$store.commit("addPost", newPost);
      // 작성 후 목록 페이지로 이동
      this.$router.push("/");
    },
  },
};
</script>
