<template>
  <form action="get">
    <div>
      id:<input type="text" v-model="lgoinId" /> pw:
      <input type="text" v-model="loginPw" />
    </div>
    <button type="button" @click="clickLogin">로그인</button>
  </form>
</template>
<script>
export default {
  data() {
    return {
      lgoinId: "",
      loginPw: "",
    };
  },
  methods: {
    clickLogin() {
      console.log(this);
      // const id = this.lgoinId;
      // if (id == "admin") {
      // }
    },
  },
};
</script>
