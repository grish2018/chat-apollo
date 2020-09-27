import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import { createProvider } from "./vue-apollo";

Vue.config.productionTip = false;
router.beforeEach((to, from, next) => {
  if (to.matched.some((record) => record.meta.requiresAuth)) {
    if (!localStorage.getItem("apollo-token")) {
      next({
        name: "login",
      });
    } else {
      next();
    }
  } else if (to.matched.some((record) => record.meta.requiresVisitor)) {
    if (localStorage.getItem("apollo-token")) {
      next({
        name: "profile",
      });
    } else {
      next();
    }
  }
  {
    next();
  }
});

new Vue({
  apolloProvider: createProvider(),
  router,
  store,
  render: (h) => h(App),
}).$mount("#app");
