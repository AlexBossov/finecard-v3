import Vue from 'vue'
import VueRouter, { RouteConfig } from 'vue-router'
import StartPage from '../components/startPage/StartPage.vue'
import Location from '../components/location/Location.vue'

Vue.use(VueRouter)

const routes: Array<RouteConfig> = [
  {
    path: '/finecard',
    name: 'finecard',
    component: StartPage,
    children: [
      {
        path: '/location',
        name: 'location',
        component: Location,
      }
    ]
  },
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
