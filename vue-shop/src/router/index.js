import { createRouter, createWebHistory } from "vue-router";
import HomeView from "../views/HomeView.vue";
// import ImageInsert from "../views/ImageInsert.vue";
// import PoductList from "../views/PoductList.vue";
// import ImageInsert from "@/views/ImageInsert.vue";
// import PoductList from "@/views/PoductList.vue";
const routes = [
  {
    path: "/",
    name: "home",
    component: HomeView,
  },
  // 라우트 정보등록할때 경로 or 이름으로 등록 가능
  // {
  //   path: "/image_insert",
  //   name: "imageInsert",
  //   component: ImageInsert,
  // },
  // {
  //   path: "/list",
  //   name: "poductList",
  //   component: PoductList,
  // },

  {
    path: "/about",
    name: "about",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/AboutView.vue"),
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
