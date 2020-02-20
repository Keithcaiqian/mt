import Vue from 'vue'
import VueRouter from 'vue-router'
import home from '../views/Home.vue'
import main from '../views/index.vue'
import changeCity from '../views/changeCity.vue'
import detail from '../views/detail.vue'
import login from '../views/login.vue'
import register from '../views/register.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'home',
    component: home,
    redirect:'/main',
    children:[
      {
        path:'/main',
        name:'main',
        component:main
      },{
        path:'/changeCity',
        name:'changeCity',
        component:changeCity
      },{
        path:"/detail/:id",
        name:'detail',
        component:detail
      }
    ]
  },
  {
    path:'/login',
    name:'login',
    component:login
  },
  {
    path:'/register',
    name:'register',
    component:register
  }
]

const router = new VueRouter({

  scrollBehavior (to, from, savedPosition) {
    return { x: 0, y: 0 }
  },
  routes
})

export default router
