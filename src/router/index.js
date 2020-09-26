import Vue from "vue";
import VueRouter from "vue-router";
import Login from "./../views/Login";
import Profile from "./../views/Profile";
import EditProfile from "./../views/EditProfile";
Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "login",
    component: Login,
    meta: {
      requiresVisitor: true,
    },
  },
  {
    path: "/profile",
    name: "profile",
    component: Profile,
    meta: {
      requiresAuth: true,
    },
  },
  {
    path: "/profile/edit",
    name: "editProfile",
    component: EditProfile,
    meta: {
      requiresAuth: true,
    },
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;
