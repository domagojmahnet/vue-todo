import Vue from "vue";
import VueRouter, { RouteConfig } from "vue-router";
import ItemView from "@/views/ItemView.vue";
import RouteNames from "@/router/routeNames"
import SignalRView from "@/views/SignalRView.vue";

Vue.use(VueRouter);

const routes: RouteConfig[] = [
  { path: "/", redirect: "/active" },
  { path: "/active", name: RouteNames.Active, component: ItemView },
  { path: "/done", name: RouteNames.Done, component: ItemView },
  { path: "/archived", name: RouteNames.Archived, component: ItemView },
  { path: "/signalr", name: RouteNames.SignalR, component: SignalRView }
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes
});

export { router };
