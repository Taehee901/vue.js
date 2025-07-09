<!--router-link:보여줘야할 컴포넌트의 경로home누르면 / 라우터 정보들고있음, url이 들어오면 router-view태그:보여줘야할 컴포넌트에 대한 것들을 화면에 보여줌?-->
<template>
  <nav>
    <!-- 호출라이터정보-->
    <router-link to="/">Home</router-link> |
    <router-link to="/about">About</router-link> |
    <router-link to="/data">Data link</router-link> |
    <router-link to="/show">Test</router-link>
  </nav>
  <router-view />
  <p>App.vue : {{ msg }}</p>
</template>

<script>
export default {
  data() {
    return {
      msg: "",
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
