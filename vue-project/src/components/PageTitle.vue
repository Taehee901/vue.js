<!-- 하위컴포넌트 -->
<template>
  <slot name="header"></slot>
  <!-- <h3>PageTitle</h3> -->
  <h3>PageTitle.vue</h3>
  <p>{{ title }}</p>
  <p>{{ likes }}</p>
  <p v-bind:class="{ 'red-font': isOk }">환영합니다.</p>
  <!-- 환영합니다 h3태그말고는 다 속성가짐-->
  <slot></slot>
  <ul>
    <li v-bind:key="i" v-for="(member, i) in members">
      이름:{{ member.name }},나이:{{ member.age }}
    </li>
  </ul>
  <!-- 값전달 및 페이지를 아래방식처럼 전달할수있다. -->
  <slot name="footer"></slot>
</template>
<script>
export default {
  data() {
    return {
      msg: "",
    };
  },
  //상위->하위요소로 정보(값)를 전달하고싶을때,옵션객체를 담고 있음 ->컴포지션(함수기반으로 바꾸는 작업.)
  //값이 안넘어오면 defalut:여기값사용
  //1.option.api
  props: {
    //상위컴포넌트에서 하위컴포넌트로 값을 전달.
    title: { type: String, default: "페이지 제목" },
    likes: { type: Number, default: 0 },
    isOk: { type: Boolean, default: false },
    members: {
      type: Array,
      default: function () {
        return [{ name: "삼촌", age: 33 }];
      },
    },
  },
};
</script>

<style scoped>
.red-font {
  color: red;
}
ul {
  list-style-type: none;
}
</style>
