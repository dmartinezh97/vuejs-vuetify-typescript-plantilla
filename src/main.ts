import Vue from "vue";
import "@/plugins";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import { Http } from "./namespaces/Http";
import vuetify from '@/plugins/vuetify'

Vue.config.productionTip = false;

new Http.ApiJwtService();

new Vue({
  router,
  store,
  vuetify,
  render: h => h(App)
}).$mount("#app");