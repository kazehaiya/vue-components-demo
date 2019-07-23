import Vue from 'vue';
import Router from 'vue-router';

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Button',
      component: () => import('./views/button.vue')
    },
    {
      path: '/others',
      name: 'Others',
      component: () => import('./views/others.vue')
    }
  ]
});
