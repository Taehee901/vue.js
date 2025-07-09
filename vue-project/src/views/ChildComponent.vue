<template>
  <h3>자식컴포넌트(ChildComponent.vue)</h3>
  <p><input type="text" v-model="msg" /></p>
  <!-- ref:이름붙여서 확인가능 ref="sendBtn",하위 상위 emit 데이터 전달,상위 하위 props로 전달-->
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
      //상위컴포넌트에 정의되어있는 사용자이벤트를 부모컴포넌트에정의한다.
      this.$emit("send-message", this.msg);
      // this.$parent.msg = this.msg;
      //자식컴포넌트기준this,상위컴포넌트를찾아가서 sendMessage에 Test값을 넣어 보내겠다는의미
      //전달받은데이터:Test
      // this.$parent.sendMessage("Test");
      // this.$parent.msg = this.msg;
      // this.$parent.$parent.msg = this.msg; -> root
      // this.$root.msg = this.msg;
    },
  },
  mounted() {
    // console.log(this.$root);
    console.log(this.$refs);
  },
};
</script>
