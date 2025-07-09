<template>
  <!-- 하위->상위 -> 이벤트를 정의해야한다. -->
  <!-- 부모가가진임의의메소드를 자식요소가불러오는거 send-message임의로지정한 사용자가만든 이벤트유형 -->
  <h3>부모컴포넌트(ParentComponent.vue)</h3>
  <ChildComponent v-on:send-message="sendMessage" />
</template>
<script>
import ChildComponent from "./ChildComponent.vue";

export default {
  data() {
    return {
      msg: "",
    };
  },
  //전달받은데이터
  components: { ChildComponent },
  methods: {
    sendMessage(data) {
      console.log("전달받은데이터:" + data);
    },
  },
};
</script>
