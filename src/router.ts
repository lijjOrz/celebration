import Vue from 'vue';
import Router from 'vue-router';
import Home from './views/home/Home.vue';
import Room from './views/room/Room.vue';
import Young from './views/young/Young.vue';
import About from './views/about/About.vue';

Vue.use(Router);

const routers = new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home,
    },
    {
      path: '/young',
      name: 'young',
      component: Young,
    },
    {
      path: '/room',
      name: 'room',
      component: Room,
    },
    {
      path: '/about',
      name: 'about',
      component: About,
    },
  ],

});


routers.beforeEach((to, from, next) => {
  // console.log(to, from, next);
  next();

});


export default routers;


