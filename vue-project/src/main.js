import { createApp } from "vue";
import App from "./App.vue"; //vue확장자는 .vue,jsp+html+css
import router from "./router";

//createApp(App).use(router).mount("#app"); //vue인스턴트를 만듦.mount:페이지를 이위치에넣고페이지생성(할당)해주겠다는의미
const app = createApp(App); //페이지하나
app.use(router);
app.mount("#app"); //class .
