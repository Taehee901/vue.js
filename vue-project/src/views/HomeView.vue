<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png" />
    <!--하위컴포넌트에 정보를 전달하고 싶을때,어튜르뷰트를사용,공통컴포넌트를생성후 모든화면공통출력,자식 컴포넌트를 만들어서 재사용-->
    <!-- <HelloWorld msg="Welcome to Your Vue.js App" /> -->
    <HelloWorld msg="환영합니다" />
  </div>
</template>

<script>
// @ is an alias to /src,HelloWorld또다른 컴포넌트가 사용됨,컴포넌트안에 컴포넌트가 사용됨,컴포넌트내부에 또다른 컴포넌트를 이용하여 화면을 보여주겠다는 의미
import HelloWorld from "@/components/HelloWorld.vue"; //하위 componet import
//components?
//..
//
//
// ./
export default {
  name: "HomeView",
  components: {
    HelloWorld,
  },
};
</script>
