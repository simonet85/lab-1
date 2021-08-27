import Vue from "vue";
import VueRouter from "vue-router";

import Home from "../views/Home";
import Contact from "../views/Contact";
import About from "../views/About";

Vue.use(VueRouter);

export const routes = [
  { path: "/", component: Home, name: "home" },
  { path: "/about", component: About, name: "about" },
  { path: "/contact", component: Contact, name: "contact" }
];

const router = new VueRouter({
  mode: "history",
  routes
});

export default router;
