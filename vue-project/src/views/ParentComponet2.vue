<template>
  <ChildComponent
    v-on:send-message="send_message"
    ref="child_component"
  ></ChildComponent>
</template>
<script>
import ChildComponent from "./ChildComponent2.vue";
export default {
  components: { ChildComponent },
  mounted() {
    this.$refs.child_component.callFormParent();
  },
};
</script>
