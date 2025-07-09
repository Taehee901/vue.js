<!-- v-if,v-show차이점 기능 -->
<!--DOM → 화면에 그려져 있는 HTML 태그들 그 자체,mounted()화면에 DOM이 다 그려진 뒤 실행되는 시점-->
<!--v-if는 필요할때만 DOM을 만들고 필요없을경우 화면에 없애버림(html자체가 없어짐),v-show는 화면에는 항상 있지만 숨김,css로 display:none -->
<!--즉 v-if는 조건이 false면 DOM자체가 만들어지지 않고 true될때만 새로 DOM을 만듦,mounted()시점에서는 DOM이 없을 수 도 있다-->
<!--v-show는 DOM이 항상 만들어져 있지만 display:none으로 숨겨두고,mounted()시점에서 항상 DOM이 존재한다.-->
<!--속도: v-if 느리고 v-show는 빠름 -->
<!-- 가끔쓰는거는 v-if  자주 켜고 끌 경우는 v-show -->
<template>
  <div>
    <h2>v-if 예제</h2>
    <button @click="showIf = !showIf">Toggle v-if</button>
    <p v-if="showIf" ref="ifText">안녕! (v-if)</p>

    <h2>v-show 예제</h2>
    <button @click="showShow = !showShow">Toggle v-show</button>
    <p v-show="showShow" ref="showText">안녕! (v-show)</p>
  </div>
</template>

<script>
export default {
  data() {
    return {
      showIf: false,
      showShow: false,
    };
  },
  mounted() {
    console.log("✅ mounted 실행됨!");

    // v-if DOM 접근
    console.log("v-if DOM:", this.$refs.ifText);
    // 결과 → undefined (아직 v-if는 false이기 때문에 DOM 없음)

    // v-show DOM 접근
    console.log("v-show DOM:", this.$refs.showText);
    // 결과 → <p>안녕! (v-show)</p> (DOM은 존재)
  },
};
</script>

<!--<template>
  <div>
    <h2>v-if 예제</h2>
    <button @click="showIf = !showIf">Toggle v-if</button>
    <p v-if="showIf">이건 v-if로 표시되는 문장입니다.</p>

    <h2>v-show 예제</h2>
    <button @click="showShow = !showShow">Toggle v-show</button>
    <p v-show="showShow">이건 v-show로 표시되는 문장입니다.</p>
  </div>
</template>

<script>
export default {
  data() {
    return {
      showIf: false,
      showShow: false,
    };
  },
};
</script>-->
