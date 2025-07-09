import { createRouter, createWebHistory } from "vue-router";
import HomeView from "../views/HomeView.vue";
// import DataBinding from "../views/DataBinding.vue";
// import DataBinding from "../views/DataBindingAttr.vue";
// import DataBinding from "../views/DataBindingList.vue";
// import DataBinding from "../views/EventClick.vue";
// import DataBinding from "../views/ComputedView.vue";
// import DataBinding from "../views/WatchView.vue";
// import DataBinding from "../views/TodoView.vue";
// import DataBinding from "../views/NestedComponenteView.vue";
import DataBinding from "../views/ParentComponet.vue";
import ShowVue from "../views/ShowVue.vue";

//배열-객체,url+컴포넌트 연결하는 작업 router
//요청들어오지않아도 보여줌,한페이지에서여러기능할경우
const routes = [
  {
    path: "/",
    name: "home",
    component: HomeView,
  },
  {
    path: "/about",
    name: "about",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.

    //실요청있을때만 열리게
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/AboutView.vue"),
  },
  {
    path: "/data",
    name: "data",
    component: DataBinding,
  },
  {
    path: "/show",
    name: "show",
    component: ShowVue,
  },
];
//about:그 시점 컴포넌트들고와서 메모리를이용해서보여줌,요청시점에만보여지기에,요청하면그때해당페이지보여주는방식
//routes배열
const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
