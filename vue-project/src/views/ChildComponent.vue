<template>
  <h3>자식컴포넌트(ChildComponent),ChildComponent.vue</h3>
  <p><input type="text" v-model="msg" /></p>
  <button v-on:click="sendMessage">메시지보내기</button>
</template>
<script>
export default {
  data() {
    return {
      msg: "",
    };
  },
  methods: {
    //이벤트핸들러
    sendMessage() {
      //부모가진이벤트호출방식
      this.$emit("send-message", this.msg);
    },
  },
};
</script>
