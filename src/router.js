import Home from "./components/Home.vue";
import Login from "./components/Login.vue";
import SignUp from "./components/SignUp.vue";
import { createRouter, createWebHistory } from "vue-router";

const routes = [
  {
    name: "signup",
    component: SignUp,
    path: "/signup",
  },
  {
    name: "login",
    component: Login,
    path: "/login",
  },
  {
    name: "home",
    component: Home,
    path: "/",
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
