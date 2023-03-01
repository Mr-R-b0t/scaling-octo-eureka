import { createApp } from "vue";
import App from "../src/pages/login/App.vue";
import router from "./router";

createApp(App).use(router).mount("#app");
