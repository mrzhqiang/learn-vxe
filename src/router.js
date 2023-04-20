import Vue from 'vue';
import Router from 'vue-router';
import Home from './views/Home.vue';

Vue.use(Router);

let routes = [
  {
    path: '/',
    name: 'home',
    component: Home,
    children: [
      {
        path: '/button',
        name: 'button',
        component: () => import('./views/Button.vue'),
      },
      {
        path: '/radio',
        name: 'radio',
        component: () => import('./views/Radio'),
      },
    ]
  },
  {
    path: '/about',
    name: 'about',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ './views/About.vue')
  }
];

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
});
