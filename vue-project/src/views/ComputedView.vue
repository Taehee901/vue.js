<template>
  <h3>Computed</h3>
  <h3>FristName: {{ firstName }}</h3>
  <h3>LastName: {{ lastName }}</h3>
  <h3>FullName: {{ fullName }}</h3>
  <!--장바구니-->
  <h3>장바구니</h3>
  <div v-bind:key="product.id" v-for="product in cart">
    <!-- <strong>딸기</strong> - 가격:2000 - 수량:3 -->
    <strong>{{ product.name }}</strong> - 가격:{{ product.price }}원 -
    수량:<input type="number" v-model.number="product.quantity" />
  </div>
  <p><strong>총수량:</strong>{{ totalQuantity }}개</p>
  <p><strong>총금액:</strong>{{ totalPrice }}원</p>
</template>
<script>
//데이터를 조합하고 싶으면 두개값을 다포함하도록 정의하면됨 - 연산에의해 처리된결과값을보고싶으면 data속성에 정의x
//여러건이라 배열
//computed속성에 정의,마운팅되는시점에 데이터값을바꾸면 계산해야하는 속성일 경우 computed속성에 넣어 연산을 만들수 있다.연산처리를넣을 수 있다.
export default {
  data() {
    return {
      firstName: "길동",
      lastName: "홍",
      cart: [
        { id: 1, name: "사과", price: 2000, quantity: 2 },
        { id: 2, name: "바나나", price: 1000, quantity: 3 },
        { id: 3, name: "딸기", price: 3000, quantity: 1 },
      ],
    };
  },
  //함수처럼보이지만 데이터 속성, 데이터들의 속성 중 어떤게변동이 발생하면 computed에 정의된 속성의도 같이변경됨
  // ex>장바구니,computed:같은데이터속성이긴한데 계산된속성을하고싶을때 속성을 정의하면되는데 정의된 속성은 함수처럼쓴다.
  computed: {
    //조합연산의해가져온값,retunrn이변경되어 변경되는데 이번에는 fullname자체를 변경하면 //값이바뀌어지면 반응하는 기능
    fullName() {
      return this.firstName + "," + this.lastName;
    },
    //reduce:기존값 누적,reduce새로운배열일 수 있고,값일 수도 있고 만들어줌,item:cart,0:초기값,acc:변동수량
    totalQuantity() {
      return this.cart.reduce((acc, item) => acc + item.quantity, 0);
    },

    totalPrice() {
      return this.cart.reduce(
        (acc, item) => acc + item.quantity * item.price,
        0
      );
    },
  },
  //이벤트 훅 ,this컴포넌트 자체를 가리킴
  mounted() {
    console.log(this);
    this.firstName = "kildong";
  },
};
</script>
<style></style>
