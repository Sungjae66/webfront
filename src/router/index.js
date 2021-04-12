import Vue from 'vue'
import VueRouter from 'vue-router'
import store from '../store/index'
Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    redirect: 'login',
    hidden: true,
    meta:{
      name: "主页"
    }
  },
  {
    path: "/login",
    name: "Login",
    hidden: true,
    meta: {
      name: "登录"
    },
    component: () => import('../views/Login/index.vue'),
  },
  {
    path: "/echarts",
    name: "Echarts",
    meta:{
      name: "基础图表",
      icon: "el-icon-s-data",
      requireAuth: true,  // 需要登录
    },
    leaf:false,  //多个节点
    component: () => import("../views/Layout/index.vue"),
    children: [
      {
        path: "/index",
        name: "Index",
        meta:{
          name: "可视化数据"
        },
        component: () => import("../views/Echarts/index.vue")
      },
    ]
  },
  {
    path: "/userSystem",
    name: "UserSystem",
    meta:{
      name: "用户管理",
      icon: "el-icon-s-custom",
      requireAuth: true,  // 需要登录
    },
    leaf:false,
    component: () => import("../views/Layout/index.vue"),
    children: [
      {
        path: "/userList",
        name: "UserList",
        meta:{
          name: "用户列表"
        },
        component: () => import("../views/User/index.vue")
      },
      {
        path: "/userSettings",
        name: "UserSettings",
        meta:{
          name: "用户配置",
        },
        component: () => import("../views/system/index.vue")
      }
    ]
  },
  {
    path: "/system",
    name: "System",
    meta:{
      name: "系统设置",
      icon: "el-icon-s-data",
      requireAuth: true,  // 需要登录
    },
    leaf:true,  //一个节点
    component: () => import("../views/Layout/index.vue"),
    children: [
      {
        path: "/systemSettings",
        name: "SystemSettings",
        component: () => import("../views/system/index.vue")
      }
    ]
  },
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

router.beforeEach((to, from, next) => {
  /*如果本地存在 token 则不允许直接跳转到登录页面*/
  if(to.fullPath == "/login"){
    if(store.state.token){
      next({
        path:'/index'
      });
    }else {
      next();
    }
  }
  if (to.meta.requireAuth) { // 判断该路由是否需要登录权限
    if(store.state.token){ //判断本地是否存在token
      next();
    }else {
      if(to.path === '/login'){
        next();
      }else {
        next({
          path:'/login',
          query: {redirect: to.fullPath}   //登录成功后重定向到当前页面
        })
      }
    }
  }
  else {
    next();
  }
});

export default router
