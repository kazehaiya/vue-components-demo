import Vue from 'vue';
import App from './App.vue';
import router from './router';
import store from './store';
import MyComponents from '@lib/vue-cli-project-demo.umd';
// import MyComponents from './entry';
// import MyButton from '@dist/button';

Vue.config.productionTip = false;

// console.log(MyComponents)

Vue.use(MyComponents);
// Vue.use(MyButton);

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app');
