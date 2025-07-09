<!-- css,jsp ,데이터-화면 매칭 변경사항발생시 반영-->
<!-- html 영역 ,msg 자바스크립트에서 데이터역할을 한다-->
<!-- 보강법:{{출력하고 싶은데이터}} -->
<template>
  <h1>Hello, {{ msg }}</h1>
  <h1 v-text="msg"></h1>
  <!--html태그바인딩-->
  <h2 v-html="htmlStr"></h2>
  <!--vaule값 바인딩,input태그는 사용자가 입력한 값들을 변경 => 아래 양방향바인딩-->
  <p><input type="text" v-model="valueModel" /></p>
  <!--문자열로 처리 됨,v-model만 사용시-->
  <p><input type="number" v-model.number="numberModel" /></p>
  <!--select태그-->
  <p>
    <select v-model="city">
      <option value="02">서울</option>
      <option value="042">대전</option>
      <option value="052">부산</option>
    </select>
  </p>
  <!--input태그는 v-model,v-binding: 확인-->
  <p>
    <label> {{ checking }}</label>
    <input
      type="checkbox"
      true-value="yes"
      false-value="no"
      v-model="checking"
      checked
    />
  </p>
  <!-- ffff -->
  <div>
    <label><input type="radio" value="서울" v-model="radioCheck" />서울</label>
    <label><input type="radio" value="대전" v-model="radioCheck" />대전</label>
    <label><input type="radio" value="부산" v-model="radioCheck" />부산</label>
  </div>
  <span>선택한지역:{{ radioCheck }}</span>
  <!--양방향바인딩:화면에서 변경된값이  모델에서도 변경되는거(데이터속성도변경됨)-->
  <p>{{ valueModel }},{{ numberModel }},{{ city }}</p>
</template>
<!-- jsp영역 -->
<script>
//view -- model의 바인딩.
//화면상에서쓰여지는 데이터 - msg를 매칭시켜주는 작업(두 정보를 동일화 시켜줌) = 데이터바인딩
export default {
  data() {
    return {
      msg: "World!!!",
      htmlStr: '<span style="color:red;">Red Text</span>',
      valueModel: "홍길동",
      numberModel: 10,
      city: "042",
      // checking: true,
      checking: "yes",
      radioCheck: "",
    };
  },
};
</script>
<!-- css영역,scoped현재페이지의 태그에만 스타일 적용-->
<style scoped>
h1 {
  color: green;
}
</style>
