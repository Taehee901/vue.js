<template>
  <h3>MiddleComponet.vue (중간 컴포넌트)</h3>
  <GrandChildComponent />
</template>
<script>
import GrandChildComponent from "./child/GrandChildComponent.vue";
export default {
  // 컴포넌트에 등록해야지 사용가능하고 에러나는 이유는 사용 x
  components: { GrandChildComponent },
};
</script>
<style scoped>
.middle-component {
  border: 1px solid yellow;
}
</style>
