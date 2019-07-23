import Vue from 'vue';
import App from './App.vue';
import router from './router';
import store from './store';
import MyComponents from '@lib/vue-cli-project-demo.umd.min';
// import MyComponents from './entry';

Vue.config.productionTip = false;

Vue.use(MyComponents);

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app');
