<template>
  <main class="mt-3">
    <div class="container">
      <div class="row">
        <div class="col-md-5">
          <div
            id="carouselExampleIndicators"
            class="carousel carousel-dark slide"
            data-bs-ride="carousel"
          >
            <ol class="carousel-indicators">
              <li
                data-bs-target="#carouselExampleIndicators"
                data-bs-slide-to="0"
                class="active"
              ></li>
              <li
                data-bs-target="#carouselExampleIndicators"
                data-bs-slide-to="1"
              ></li>
              <li
                data-bs-target="#carouselExampleIndicators"
                data-bs-slide-to="2"
              ></li>
            </ol>
            <div class="carousel-inner">
              <div
                :class="`carousel-item ${i == 0 ? 'active' : ''}`"
                :key="i"
                v-for="(pimg, i) in productImage"
              >
                <img
                  :src="`/download/${productId}/${pimg.path}`"
                  class="d-block w-100"
                  alt="..."
                />
              </div>
            </div>
            <a
              class="carousel-control-prev"
              href="#carouselExampleIndicators"
              role="button"
              data-bs-slide="prev"
            >
              <span
                class="carousel-control-prev-icon"
                aria-hidden="true"
              ></span>
              <span class="visually-hidden">Previous</span>
            </a>
            <a
              class="carousel-control-next"
              href="#carouselExampleIndicators"
              role="button"
              data-bs-slide="next"
            >
              <span
                class="carousel-control-next-icon"
                aria-hidden="true"
              ></span>
              <span class="visually-hidden">Next</span>
            </a>
          </div>
        </div>
        <div class="col-md-7">
          <div class="card shadow-sm">
            <div class="card-body">
              <h5 class="card-title">{{ productDetail.product_name }}</h5>
              <h5 class="card-title pt-3 pb-3 border-top">
                {{ getCurrencyFormat(productDetail.product_price) }}원
              </h5>
              <p class="card-text border-top pt-3">
                <span class="badge bg-dark me-1">{{
                  productDetail.category1
                }}</span>
                <span class="badge bg-dark me-1">{{
                  productDetail.category2
                }}</span>
                <span class="badge bg-dark">{{ productDetail.category3 }}</span>
              </p>
              <p class="card-text pb-3">
                배송비 {{ getCurrencyFormat(productDetail.delivery_price) }}원 |
                도서산간(제주도) 배송비 추가
                {{ getCurrencyFormat(productDetail.add_delivery_price) }}원 |
                택배배송 | {{ productDetail.outbound_days }}일 이내 출고
                (주말,공휴일 제외)
              </p>
              <div class="card-text border-top pb-3">
                <div class="row">
                  <div class="col-auto">
                    <label class="col-form-label">구매수량</label>
                  </div>
                  <div class="col-auto">
                    <div class="input-group">
                      <span
                        class="input-group-text"
                        style="cursor: pointer"
                        @click="calculatePrice(-1)"
                        >-</span
                      >
                      <input
                        type="text"
                        class="form-control"
                        style="width: 40px"
                        v-model="total"
                      />
                      <span
                        class="input-group-text"
                        style="cursor: pointer"
                        @click="calculatePrice(1)"
                        >+</span
                      >
                    </div>
                  </div>
                </div>
              </div>
              <div class="row pt-3 pb-3 border-top">
                <div class="col-6">
                  <h3>총 상품 금액</h3>
                </div>
                <div class="col-6" style="text-align: right">
                  <h3>{{ getCurrencyFormat(totalPrice) }}</h3>
                </div>
              </div>
              <div class="d-flex justify-content-between align-items-center">
                <div class="col-6 d-grid p-1">
                  <button type="button" class="btn btn-lg btn-dark">
                    장바구니 담기
                  </button>
                </div>
                <div class="col-6 d-grid p-1">
                  <button type="button" class="btn btn-lg btn-danger">
                    주문하기
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="row">
        <div class="col-12">
          <img
            :src="`/download/${productId}/${productDetail.path}`"
            class="img-fluid"
          />
        </div>
      </div>
    </div>
  </main>
</template>
<script>
/*
  File:ProductDetail.vue
  Content: 상품상세화면,/detail => ProductDetail.vue
  Created:user
  Date: 2025.07.11
  */
//axios 반복사용 -> 함수로 만들어서 전역으로 사용
//mixin 반복사용하는 거 함수로 등록하는
export default {
  data() {
    return {
      productImage: [],
      //하위속성 o =>객체,productId for반복문에서 들고 온게x 정의필요
      productDetail: {},
      productId: 0,
      total: 1, //수량
      totalPrice: 0,
    };
  },
  //함수 methods:
  methods: {
    calculatePrice(qty) {
      //0이하일 경우 -값나오는 거 방지
      let total = this.total + qty;
      if (total > 0) {
        this.total = this.total + qty;
        this.totalPrice = this.productDetail.product_price * this.total;
      }
    },
    getCurrencyFormat(price) {
      //Intl.NumberFormat Mdn web docs 참고
      // 한국원화
      const krwformatter = new Intl.NumberFormat("ko-KR", {
        style: "currency",
        currency: "KRW",
      });
      // console.log(krwformatter.format(price));
      return krwformatter.format(price);
    },
    async getProductDetail() {
      let product = await this.$api("/api/productDetail", {
        param: [this.productId],
      }); //param이름으로 데이터 넘김 ->한건조회
      //서버가 배열 형태로 반환 -> api설계할 때 [{}]형식으로 정의해두었기에,쿼리를 만들때
      // console.log(product[0]);
      this.productDetail = product[0]; //DB를 쿼리했을때 DB에 존재하는 데이터의건수가 몇 건일지 모르기 때문에, 한 건을 가져와도 배열로 감싸서 준다.
      this.totalPrice = this.total * this.productDetail.product_price;
    },
    //슬라이스 이미지
    //오류원인 product.js의 쿼리문 테이블t_image -> t_images로 해둠
    async getProductMainImages() {
      this.productImage = await this.$api("/api/productMainImages", {
        param: [this.productId],
      });
    },
  },
  //마운티드 훅 ->파라미터 넘긴값,쿼리로 넘어온 값을 데이터 속성에 넣어서 gpd이벤트 호출,공동사용함수들은 this접근가능,호출url,2.파라미터는 객체타입으로 전달,Node.js 05폴더의 app.js 파람으로 쿼리이름을 읽어오도록 만듦
  mounted() {
    // console.log(this.$route.query.product_id);
    this.productId = this.$route.query.product_id;
    this.getProductDetail();
    this.getProductMainImages();
  },
};
</script>
