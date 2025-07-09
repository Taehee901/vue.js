<template>
  <!-- 하위->상위 -> 이벤트를 정의해야한다. -->
  <!-- 최상위 컴포넌트가 app.js -->
  <!-- 부모가가진임의의메소드를 자식요소가불러오는거 send-message임의로지정한 사용자가만든 이벤트유형 -->
  <h3>부모컴포넌트(ParentComponent.vue)</h3>
  <p class="parent-component">{{ msg }}</p>
  <ChildComponent v-on:send-message="sendMessage" ref="child_comp" />
</template>
<script>
// import ChildComponent from "./ChildComponent.vue";
import ChildComponent from "./ChildComponent1.vue";
export default {
  data() {
    return {
      msg: "홍길동",
    };
  },
  mounted() {
    this.$refs.child_comp.$refs.btn.click();
  },
  //전달받은데이터
  components: { ChildComponent },
  methods: {
    //매개값,현재는 자식요소에서 this.msg를 전달
    sendMessage(data) {
      console.log("전달받은데이터:" + data);
    },
  },
};
</script>
