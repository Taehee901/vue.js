<template>
  <button type="button" v-on:click="childFunc" ref="btn">click</button>
</template>
<script>
export default {
  methods: {
    childFunc() {
      console.log("부모 컴포넌트에서 직접 발생시킨 이벤트");
    },
  },
};
</script>
