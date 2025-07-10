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
  <!-- ㄴㄴ -->
  <router-view />
  <div class="appUse" v-if="appUse">
    <!--하위컴포넌트에 전달할 정보-->
    <div>
      <h3>App.vue(부모컴포넌트 - Provider)</h3>
      <p>
        제공자이름:<strong>{{ username }}</strong>
      </p>
      <MiddleComponent />
    </div>
  </div>
  <div v-if="appUse">
    <h1>🛍 Vue Provide/Inject 장바구니 예제</h1>
    <ProductList />
    <CartView />
  </div>
  <!-- <p>App.vue : {{ msg }}</p> -->
</template>

<script>
import MiddleComponent from "./views/MiddleComponent.vue";
// 하위컴포넌트 2개 사용
import ProductList from "./components/ProductList.vue";
import CartView from "./components/CartView.vue";
export default {
  components: { MiddleComponent, ProductList, CartView },
  data() {
    return {
      msg: "",
      appUse: false,
      username: "홍길동",
      cart: [],
    };
  },
  //함수 통해 전달하고 싶은 속성이름:속성값 을 정의한다.
  //하위에 전달,updateUserName 이벤트 이름
  //객체전달
  provide() {
    return {
      // 데이터 속성을 전달
      providerUserName: this.username, //데이터속성
      // 메소드를 속성으로 전달가능
      updateUserName: this.changeUserName, //메소드
      cart: this.cart,
      addToCart: this.addToCart,
      removeFromCart: this.removeFromCart,
    };
  },
  methods: {
    //username데이터속성을 바꿈(이벤트핸들러가전달)
    //전달받은값으로 username의 값을 바꿈
    changeUserName(name) {
      this.username = name;
    },
    addToCart(product) {
      //상품 id 같은게 o 증가
      const existing = this.cart.find((item) => item.id === product.id);
      if (existing) {
        existing.qty++;
      } else {
        //객체를 펼치는 방식으로 ,속성:값,속성:값 ...,펼친연산자
        this.cart.push({ ...product, qty: 1 });
      }
    },
    removeFromCart(productId) {
      //새로운배열만듦,filter,배열에서 데이터처리하는거 많이 쓰여짐
      this.cart = this.cart.filter((item) => item.id !== productId);
    },
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
