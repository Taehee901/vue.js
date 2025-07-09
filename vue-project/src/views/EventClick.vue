<template>
  <!-- v-bind: 생략가능 :, v-on: == @click:이벤트유형 -->
  <h3>Event</h3>
  <p :key="i" v-for="(product, i) in list">
    <!--매개값전닳-->
    <button @click="ClickFnc(num)">이벤트클릭</button>
  </p>
</template>

<script>
export default {
  data() {
    return {
      msg: "",
      list: [10, 20, 30],
    };
  }, //end of data
  //이벤트들은 메소드안에 정의해줌
  methods: {
    //매개값을 받음
    ClickFnc(num) {
      alert(num + "클릭함");
    },
  },
};
</script>
