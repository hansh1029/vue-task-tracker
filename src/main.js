import { createApp } from "vue";
import App from "./App.vue";
// import './registerServiceWorker'
import router from "./router";

//declare to use router
createApp(App)
  .use(router)
  .mount("#app");
