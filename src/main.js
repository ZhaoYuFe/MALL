import Vue from 'vue'
import App from './App.vue'
import router from './router'
import VueRouter from 'vue-router'
import store from './store'
// import axios from 'axios'
// import VueAxios from 'vue-axios'
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';

Vue.config.productionTip = false

Vue.use(ElementUI);
Vue.use(VueRouter);
// Vue.use(VueAxios);

// Vue.prototype.$axios = axios

new Vue({
  router,
  store,
  // axios,
  render: h => h(App)
}).$mount('#app')
