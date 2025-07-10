<template>
  <h3>상위컴포넌트 = 하위컴포넌트(PageTitle)</h3>
  <!-- 태그가 컴포넌트 이름, -->
  <!-- <PageTitle title="컴포넌트 연습." /> -->
  <!--동적으로 값전달-->
  <!-- :하위요소데이터전달?-->
  <!-- title이라는 prop에 titleMsg 값을 바인딩하는 역할 -->
  <!-- :실제 값은 ""-->
  <PageTitle
    v-bind:title="titleMsg"
    v-bind:likes="likeCnt"
    v-bind:isOk="OkValue"
    v-bind:members="memberList"
  >
    <!-- html요소 -->
    <template v-slot><p>slot의 내용입니다.</p></template>
    <template v-slot:header><p>Header의 slot의 내용입니다.</p></template>
    <template v-slot:footer><p>Footer의 slot의 내용입니다.</p></template>
  </PageTitle>
  <!-- <PageTitle /> PageTitle변경값없고 고정 상위 요청 다양한값을 전달하고싶음-->
</template>
<script>
import PageTitle from "../components/PageTitle.vue";
export default {
  components: {
    PageTitle,
  },
  data() {
    return {
      titleMsg: "동적인 내용을 전달하기.",
      likeCnt: 3,
      OkValue: false,
      memberList: [
        { name: "아버지", age: 40 },
        { name: "어머니", age: 35 },
        { name: "아들", age: 5 },
      ],
    };
  },
};
</script>
