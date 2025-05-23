import "@/main.css";
import FontAwesomeIcon from "@/helpers/fontawesome.library";
import { createApp } from "vue";
import { createPinia } from "pinia";

import PrimeVue from "primevue/config";
import ToastService from "primevue/toastservice";
import Aura from "@primeuix/themes/aura";

import App from "./App.vue";
import router from "./router";
import auth0 from "@/plugins/auth0.plugin";

const app = createApp(App);
const pinia = createPinia();

app.component("font-awesome-icon", FontAwesomeIcon);
app
  .use(router)
  .use(pinia)
  .use(auth0)
  .use(PrimeVue, {
    theme: {
      preset: Aura,
    },
  })
  .use(ToastService);
app.mount("#app");
