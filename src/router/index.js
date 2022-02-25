import { createRouter, createWebHistory } from "vue-router";
import { decode } from "js-base64";
import NProgress from "nprogress";
import "nprogress/nprogress.css";

const routes = [
  {
    path: "/",
    component: () => import("@/layout/index.vue"),
    children: [
      {
        path: "/",
        name: "Home",
        meta: { title: "首页" },
        component: () => import("@/views/home.vue"),
      },
      {
        path: "/setting",
        name: "Setting",
        meta: { title: "设置" },
        component: () => import("@/views/setting.vue"),
      },
    ],
  },
  {
    path: "/login",
    name: "Login",
    meta: { title: "登录" },
    component: () => import("@/views/login-register.vue"),
  },
  {
    path: "/num-scroll",
    name: "Num",
    meta: { title: "数字滚动" },
    component: () => import("@/views/num-scrolling.vue"),
  },
  {
    path: "/:catchAll(.*)",
    name: "404",
    meta: { title: "404" },
    component: () => import("@/views/404.vue"),
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

router.beforeEach((to, from, next) => {
  NProgress.start();
  // to and from are both route objects. must call `next`.
  const jwt = sessionStorage.getItem("jwt") || "";

  document.title = jwt ? (to.meta.title ? to.meta.title + " - 管理应用" : "管理系统") : "系统登录";
  document.title = to.meta.title;

  // console.log(2222, to.path);
  if (to.path === "/login" || to.path === "" || to.path === "/" || to.path === "/num-scroll") {
    // console.log(2222, !!jwt);
    next();
    // !!jwt ? next("/") : next();
  } else {
    if (from.path === "/login" && !jwt) {
      NProgress.done(true);
      next("/login");
      return;
    }
    if (jwt) {
      // console.log(111, to.meta.hasOwnProperty("roles"));
      // eslint-disable-next-line
      if (to.meta?.hasOwnProperty("roles")) {
        let roles = to.meta.roles || [],
          { role } = jwt && JSON.parse(decode(jwt));
        roles.includes(role) ? next() : next("/404");
        return;
      }
      next();
    } else {
      next("/login");
    }
  }
});

router.afterEach(() => {
  NProgress.done();
});

export default router;
