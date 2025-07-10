<template>
  <h3>ParentButton.vue</h3>
  <!-- 공통부분 스타일만가지고싶으면 라벨만 바꿔줌 -->
  <!--사용자이벤트호출-->
  <!-- v-bind는  :로 사용하는데 on지시자를 @:하면 데이터를 매개값으로 전달받지못하는 문법오류 발생 확인 
    컴포넌트가 공용! -> 다른 뷰에서도 공통으로 사용하는것들을  components파일로 
  -->
  <MyButton v-on:my-event="eventClick" label="확인" />
  <MyButton @my-event="eventClick" label="취소" />
  <MyButton @my-event="eventClick" />
</template>

<script>
import MyButton from "../components/MyButton.vue";
export default {
  // 옵션.api를 이용한 옵션객체
  components: { MyButton },
  data() {
    return {
      msg: "",
    };
  },
  methods: {
    //넘겨온 데이터값을 매개값으로 받는다.
    eventClick(data) {
      console.log(data);
    },
  },
};
</script>

<style scoped>
h3 {
  color: #333;
}
</style>
