<template>
  <h3>Watch</h3>
  <!-- 초기값false로 해두어야 입력이 가능하다 -->
  <textarea v-bind:disabled="charFull" v-model="messageContent"></textarea>
  <!-- 현재몇글자인지 보여주는 부분 -->
  <p>현재:{{ charCount }} 자 / 최대 50자</p>
  <p>{{ feebMessage }}</p>
</template>
<script>
export default {
  data() {
    return {
      msg: "",
      messageContent: "",
      charCount: 0,
      charFull: false,
      feebMessage: "메세지를 입력하세요",
    };
  },
  //nv:바뀐값.ov:바뀌기 전 값
  //감시:messageContent값이 변경된건지 아닌지 검사중,사용자가값을바꾸면 매개값으로 첫번째위치는 바뀐값 두번재매개값은 바뀌기전값
  watch: {
    messageContent(nv, ov) {
      console.log(nv + "," + ov);
      //값변경될때마다 글자 수셈
      this.charCount = nv.length;
      //50자 => charFull:true,length=50이면 feebMessage:"제한 50자입니다."다 채울 경우
      if (nv.length >= 50) {
        this.charFull = true;
        this.feebMessage = "제한 50자입니다";
      }
    },
  },
};
</script>
<style></style>
