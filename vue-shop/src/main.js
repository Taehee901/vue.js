import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import mixins from "./mixins";

createApp(App) //
  .use(router) //
  .mixin(mixins) //공동함수.,this이름으로 여기 등록된 함수들을 다 사용 가능.
  .mount("#app");
