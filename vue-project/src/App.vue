<!--router-link:보여줘야할 컴포넌트의 경로home누르면 / 라우터 정보들고있음, url이 들어오면 router-view태그:보여줘야할 컴포넌트에 대한 것들을 화면에 보여줌?-->
<template>
  <nav>
    <!-- 호출라이터정보-->
    <router-link to="/">Home</router-link> |
    <router-link to="/about">About</router-link> |
    <router-link to="/data">Data link</router-link> |
    <router-link to="/show">Test</router-link> |
    <router-link to="/todo">Todo</router-link>
  </nav>
  <!--하위컴포넌트에 전달할 정보-->
  <div>
    <h3>App.vue(부모컴포넌트 - Provider)</h3>
    <p>
      제공자이름:<strong>{{ username }}</strong>
    </p>
    <MiddleComponent />
  </div>
  <router-view />
  <!-- <p>App.vue : {{ msg }}</p> -->
</template>

<script>
import MiddleComponent from "./views/MiddleComponent.vue";
export default {
  components: { MiddleComponent },
  data() {
    return {
      msg: "",
      username: "홍길동",
    };
  },
  //함수 통해 전달하고 싶은 속성이름:속성값 을 정의한다.
  provide() {
    return {
      providerUserName: this.username,
    };
  },
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

nav {
  padding: 30px;
}

nav a {
  font-weight: bold;
  color: #2c3e50;
}

nav a.router-link-exact-active {
  color: #42b983;
}
</style>
