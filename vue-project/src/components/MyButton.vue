<template>
  <!-- <h3>MyButton.vue</h3> -->
  <button v-on:click="handleClick">{{ label }}</button>
</template>
<script>
export default {
  props: {
    //타입,디폴트,필수 여부..(초기값을 선언하려면)
    //공통부분 여러페이지에서 사용하기 위해 컴포넌트를 작성해서 사용한다 jsp의 tiles와 비슷
    label: { type: String, default: "클릭하세요" },
  },
  methods: {
    handleClick() {
      //$emit을 사용.
      //console.log(this);
      // "하위컴포넌트의 정보입니다."
      this.$emit("my-event", this.label + "을 전달.");
    },
  },
};
</script>

<style scoped>
button {
  background-color: green;
  color: white;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  padding: 10px 20px;
}
</style>
