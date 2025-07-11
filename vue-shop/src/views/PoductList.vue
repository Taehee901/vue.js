<template>
  <main class="mt-3">
    <div class="container">
      <div class="row mb-2">
        <div class="col-12">
          <select class="form-select">
            <option selected></option>
            <option value="1">노트북</option>
            <option value="2">모니터</option>
            <option value="3">마우스/키보드</option>
          </select>
        </div>
      </div>
      <div class="row">
        <div
          class="col-xl-3 col-lg-4 col-md-6"
          :key="i"
          v-for="(product, i) in productList"
        >
          <!-- src경로와 매핑작업필요  -->
          <div class="card" style="width: 18rem">
            <a @click="goToDetail(product.id)" style="cursor: pointer"
              ><img
                :src="`/download/${product.id}/${product.path}`"
                class="card-img-top"
                alt="..."
            /></a>
            <div class="card-body">
              <h5 class="card-title">{{ product.product_name }}</h5>
              <p class="card-text">
                <span class="badge bg-dark text-white me-1">{{
                  product.category1
                }}</span>
                <span class="badge bg-dark text-white me-1">{{
                  product.category2
                }}</span>
                <!-- 자바스크립트에 정의 -->
                <span class="badge bg-dark text-white">{{
                  product.category3
                }}</span>
              </p>
              <div class="d-flex justify-content-between align-items-center">
                <div class="btn-group" role="group">
                  <button
                    type="button"
                    class="btn btn-sm btn-outline-secondary"
                  >
                    장바구니 담기
                  </button>
                  <button
                    type="button"
                    class="btn btn-sm btn-outline-secondary"
                  >
                    주문하기
                  </button>
                </div>
                <small class="text-dark">{{ product.product_price }}원</small>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </main>
</template>
<script>
/*
  File:ProductList.vue
  Content: 상품목록,/list => ProductList.vue
  Created:user
  Date: 2025.07.11
  */
//모듈이용시 설치 필요 npm install axios --save
// import axios from "axios";
export default {
  data() {
    return {
      productList: [],
    };
  },
  methods: {
    //상품상세이미지 이동 -> 라우터 등록 ->상품id파라미터받아와야함
    // 이미지화면클릭시 -> product_id를 하나 들고옴
    goToDetail(product_id) {
      //기존방식:정적페이지 라우팅
      //this.$router.push('/detail',param),경로가 와도 되고,param,라우터 정보가 바뀔경우 다 찾아서 바꿔야하고,
      //this.$router.push('/name',param) : 장점 다시알아보기
      //지정한 파라미터 이름 query
      this.$router.push({
        name: "productDetail",
        query: { product_id: product_id },
      });
    },
    //처리된결과를 먼저가져와서 정상처리 x async를 안쓰니 이후에 처리되서
    async getProductList() {
      this.productList = await this.$api("/api/productList", {});
    },
  },
  //데이터 로딩시점에 마운티드 훅이나 크리에이티드훅을 이용해서
  //데이터 부분 param 값 넘겨줌 console.log(result)
  //오타 주의 :methods -> method
  //컴포넌트 생성되는 시점에서 화면에서 마운팅된 시점에서 발생하는거라
  mounted() {
    //component 생성후 화면에 출력되는 시점.
    this.getProductList();
    //1.url,2.data(전달될 데이터)
    // this.productList = this.$api("/api/productList", {});
    //mixins사용 안했을때
    // axios({
    //   method: "post",
    //   // url: "http://localhost:3000/api/productList",
    //   url: "/api/productList",
    //   data: {},
    // })
    //   .then((result) => {
    //     this.productList = result.data;
    //   })
    //   .catch((err) => console.log(err));
  },
};
</script>
