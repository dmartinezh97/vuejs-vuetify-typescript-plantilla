import Vue from 'vue'
import VueRouter from 'vue-router'
import store from "@/store";

Vue.use(VueRouter)

const routes = [
  {
    path: "/",
    redirect: '/home',
  },
  {
    path: "/home",
    name: "Inicio",
    meta: { title: 'Inicio' },
    component: () => import("@/views/Home/component")
  },
  {
    path: "/login",
    name: "Login",
    meta: { title: 'Iniciar sesión' },
    component: () => import("@/views/Login/component")
  },
];

const router = new VueRouter({
  mode: 'history',
  linkExactActiveClass: 'is-active',
  base: process.env.BASE_URL,
  routes,
})

router.beforeEach((to, from, next)=>{
  document.title =  to.meta.title+" - "+store.state.appName;
  next();
});

export default router
