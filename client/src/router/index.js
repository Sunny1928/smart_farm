import Vue from 'vue'
import VueRouter from 'vue-router'
import HomeView from '../components/HomeView.vue'
import PlantView from '../components/PlantView.vue'
import AccountView from '../components/AccountView.vue'
import NoteView from '../components/NoteView.vue'
import LoginView from '../components/LoginView.vue'
import IndexView from '../components/IndexView.vue'
import SP from '../components/SP.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'indexView',
    component: IndexView
  },
  {
    path: '/home',
    name: 'homeView',
    component: HomeView
  },
  {
    path: '/plant',
    name: 'plantView',
    component: PlantView
  },
  {
    path: '/account',
    name: 'accountView',
    component: AccountView
  },
  {
    path: '/note',
    name: 'noteView',
    component: NoteView
  },
  {
    path: '/login',
    name: 'loginView',
    component: LoginView
  },
  {
    path: '/sp',
    name: 'SP',
    component: SP
  }
  // {
  //   path: '/about',
  //   name: 'about',
  //   // route level code-splitting
  //   // this generates a separate chunk (about.[hash].js) for this route
  //   // which is lazy-loaded when the route is visited.
  //   component: () => import(/* webpackChunkName: "about" */ '../views/AboutView.vue')
  // }
]

const router = new VueRouter({
  mode: 'hash',
  base: process.env.BASE_URL,
  routes
})

export default router
