import { createApp } from "vue";
import App from "./App.vue"; //vue확장자는 .vue컨포넌트 한페이지 = ,jsp+html+css
import router from "./router";

//createApp(App).use(router).mount("#app"); //vue인스턴트를 만듦.mount:페이지를 이위치에넣고페이지생성(할당)해주겠다는의미
const app = createApp(App); //페이지하나,mvvm모델 ->데이터 변경사항발생시 화면,화면에서 변동 ->데이터를 발생 반영,화면요소-데이터요소 서로 연결하는작업,vue인스턴스의 역할
app.use(router); //요청 url패턴,
app.mount("#app"); //class .,mount->
