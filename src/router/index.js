import { createRouter, createWebHistory } from "vue-router";
// import views in vue project
import Home from "../views/Home";
import About from "../views/About";

//define routes
const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
  },
  {
    path: "/about",
    name: "About",
    component: About,
  },
];

//create router
const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
