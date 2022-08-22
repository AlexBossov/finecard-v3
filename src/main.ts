import Vue from 'vue'
import Vuelidate from 'vuelidate'
import VueSweetalert2 from 'vue-sweetalert2';
import App from './App.vue'
import router from './router'
import store from './store'
import vuetify from './plugins/vuetify'
import 'sweetalert2/dist/sweetalert2.min.css';


Vue.config.productionTip = false

Vue.use(Vuelidate)
Vue.use(VueSweetalert2);


new Vue({
  router,
  store,
  vuetify,
  render: h => h(App)
}).$mount('#app')
