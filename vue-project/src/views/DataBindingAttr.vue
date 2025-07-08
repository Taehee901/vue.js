<!--이 페이지를 하나의 컨포넌트라고도 한다. v-bing:width 생략 = :width-->
<!--어튜르뷰트를 바인딩할 때 쓰는거 v-bing:속성 값 바인딩 = v.bing-->
<template>
  <h3>DataBindingAttr.vue</h3>
  <p>attribute 바인딩하기.</p>
  <!-- <img v-bind:src="imgSrc" :width="imgWid" /> -->
  <!-- 값변경할때마다 imgwid에 반영 -->
  <!-- <p><input type="number" v-model.number="widVal" v-on:change="widCg" /></p> -->
  <img v-bind:src="imgSrc" v-bind:width="widVal + 'px'" />
  <p><input type="number" v-model.number="widVal" /></p>

  <!-- disabled 비활성화:true일경우: false 활성화 -->
  <p>
    <input type="text" v-model="msg" />
    <!-- <button v-bind:disabled="btnShow">클릭</button> -->
    <!-- v-bind:연산가능,JS 표현식을 평가해서 속성에 바인딩하기에 문자열,숫자,변수,계산식,삼항연산자,함수호출 등 사용가능 -->
    <!--이벤트지시자 이름:v-on ,속성바인딩:v-bind-->
    <button v-bind:disabled="msg == '' ? true : false" v-on:click="alertFnc">
      클릭
    </button>
    <!-- class바인딩 -->
  </p>
  <!-- <h3 class="text-red active">홍길동</h3> -->
  <!-- 두 단어가 연견된거는 단어가 하나면 ''굳이 필요x-->
  <p>객체를 활용한 바인딩.</p>
  <h3 v-bind:class="{ 'text-red': isRed, active: isActive }">홍길동</h3>
  <p>배열을 활용한 바인딩.</p>
  <!-- 바인딩할 값을 -->
  <!-- <h3 v-bind:class="[activeClass, errorClass]">김길동</h3> -->
  <!--배열자체를 바인딩한경우-->
  <h3 v-bind:class="classAry">김길동</h3>
  <!-- 토글키 한번누르면 스타일-->
  <p><button v-on:click="showFnc">에러스타일</button></p>
</template>

<script>
export default {
  //data영역.
  data() {
    return {
      imgSrc: "https://vuejs.org/images/logo.png",
      imgWid: "130px",
      widVal: 100,
      // btnShow: false,
      btnShow: true,
      msg: "",
      isRed: true, //객체방식{'클래스명':true,'클래스명':false},t일 경우만 적용됨
      // isActive: false,
      isActive: true,
      activeClass: "active", //배열을활용한 방식
      errorClass: "text-red",
      classAry: ["active", "text-red"],
    };
  },
  //마운트 훅
  mounted() {
    console.log(this);
    //속성의 변경가능(값추가),초기값이 공백이었는데 마운트 훅 되는 시점에 값을 추가
    this.msg = "홍길동";
    this.imgWid = "230px";
  },
  //이벤트와 관련된 정의,methods,속성에다 이벤트면 v-on:어튜르바이트:v-bind
  methods: {
    // alertFnc: == alertFnc()
    alertFnc() {
      alert(this.msg);
    },
    showFnc() {
      // console.log(this.msg);
      //홍길동의 폰트색깔을 변경
      //속성접근 this
      this.isRed = !this.isRed;
    },
    // widCg() {
    //   //widVal이 변할때마다 imgWid의 크기에 담아진다.
    //   this.imgWid = this.widVal;
    // },
  },
};
</script>

<style scoped>
.text-red {
  color: red;
}
.active {
  background-color: antiquewhite;
}
</style>
