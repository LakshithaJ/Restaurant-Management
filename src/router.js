import AddRestaurant from "./components/AddRestaurant.vue";
import Home from "./components/Home.vue";
import Login from "./components/Login.vue";
import SignUp from "./components/SignUp.vue";
import { createRouter, createWebHistory } from "vue-router";
import UpdateRestaurant from "./components/UpdateRestaurant.vue";

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
  {
    name: "addRestaurant",
    component: AddRestaurant,
    path: "/addRestaurant",
  },
  {
    name: "updateRestaurant",
    component: UpdateRestaurant,
    path: "/updateRestaurant",
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
