import { createApp } from "vue";
import App from "./App.vue";
import router from "./routes";
import Paginate from "v-scroll-paginate";

createApp(App).use(router).use(Paginate).mount("#app");
