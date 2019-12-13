import Vue from 'vue'
import App from './App'
import router from './router'
import 'lib-flexible'
import Header  from './components/Header/Header.vue'
Vue.component('Header',Header)
new Vue({
  render: h => h(App),
  router,
}).$mount('#app')