import Vue from 'vue'
import VueRouter, { RouteConfig } from 'vue-router'
import StartPage from '../components/startPage/StartPage.vue'
import Location from '../components/location/Location.vue'
import Employee from '../components/emloyee/Employee.vue'
import Settings from '../components/settings/Settings.vue'
import Client from '../components/client/Client.vue'
import Statistics from '../components/statistics/Statistics.vue'


Vue.use(VueRouter)

const routes: Array<RouteConfig> = [
  {
    path: '/finecard',
    name: 'finecard',
    component: StartPage
  },
  {
    path: '/locations',
    name: 'location',
    component: Location,
  },
  {
    path: '/employees',
    name: 'employee',
    component: Employee,
  },
  {
    path: '/settings',
    name: 'settings',
    component: Settings,
  },
  {
    path: '/clients',
    name: 'client',
    component: Client,
  },
  {
    path: '/statistics',
    name: 'statistics',
    component: Statistics,
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
