<template>
  <div>
    <h2>{{ isEditMode ? "글 수정" : "글 작성" }}</h2>
    <form @submit.prevent="handleSubmit">
      <div>
        <label>제목</label>
        <input v-model="title" required />
      </div>
      <div>
        <label>내용</label>
        <textarea v-model="content" required></textarea>
      </div>
      <button type="submit">{{ isEditMode ? "수정 완료" : "등록" }}</button>
    </form>
  </div>
</template>

<script>
import { mapGetters } from "vuex";

export default {
  name: "PostForm",
  props: ["id"], // 수정 시 id 전달됨
  data() {
    return {
      title: "",
      content: "",
    };
  },
  computed: {
    ...mapGetters(["getPostById"]),
    isEditMode() {
      return !!this.id;
    },
  },
  created() {
    // 수정 모드일 경우 기존 데이터 채우기
    if (this.isEditMode) {
      const post = this.getPostById(Number(this.id));
      if (post) {
        this.title = post.title;
        this.content = post.content;
      }
    }
  },
  methods: {
    handleSubmit() {
      if (this.isEditMode) {
        // 수정 처리
        const updatedPost = {
          id: Number(this.id),
          title: this.title,
          content: this.content,
        };
        this.$store.commit("updatePost", updatedPost);
        this.$router.push(`/post/${this.id}`);
      } else {
        // 등록 처리
        const newPost = {
          id: Date.now(),
          title: this.title,
          content: this.content,
        };
        this.$store.commit("addPost", newPost);
        this.$router.push("/");
      }
    },
  },
};
</script>
