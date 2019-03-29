import Vue from "vue";
import App from "./components/vues/App.vue";
import routes from "./core/route.js";
import VueRouter from "vue-router";

Vue.use(VueRouter);

Vue.config.productionTip = false;

const router = new VueRouter({
  mode: "history",
  routes
});

new Vue({
  el: "#app",
  router: router,
  render: h => h(App)
}).$mount("#app");
