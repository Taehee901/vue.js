<template>
  <!-- v-bind: 생략가능 :, v-on: == @click -->
  <h3>Event</h3>
  <p :key="i" v-for="(product, i) in list">
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
  methods: {
    //매개값을 받음
    ClickFnc(num) {
      alert(num + "클릭함");
    },
  },
};
</script>
