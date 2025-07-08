<template>
  <!-- v-bind: 생략가능 :, v-on: == @click -->
  <h3>Event</h3>
  <p :key="i" v-for="(product, i) in list><button @click=""></button></p>
</template>

<script>
export default {
  data() {},
  methods: {
    productList() {},
  },
};
</script>
