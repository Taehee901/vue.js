<template>
  <div class="grand-child">
    <h3>GrandChildComponent.vue(최하위 컴포넌트 - Injector)</h3>
    <p>
      주입받은이름: <strong>{{ providerUserName }}</strong>
    </p>
    <button @click="updateParentName">부모사용이름 변경</button>
  </div>
</template>
<script>
//
export default {
  //사용하고싶은 값을 inject에서 받음
  //provide정의된 이름을 사용하고 싶으면 inject의 속성으로들어가고 배열로 쓴건 여러개가 있을 수 있기 때문
  //함수도 전달가능,데이터전달가능..?
  //providerUserName 데이터 속성,07/10기준의 app.vue에서 updateUserName(이벤트메소드)는 값을 변경해주는 함수로 전달됨
  //제공받는 값이 값 or 기능 등일 수 o
  inject: ["providerUserName", "updateUserName"],
  methods: {
    updateParentName() {
      this.updateUserName("김길동"); //함수를실행
    },
  },
};
</script>
<style scoped>
.grand-child {
  border: 1px solid green;
  padding: 5px;
}
</style>
