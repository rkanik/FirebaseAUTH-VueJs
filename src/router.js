import Vue from 'vue';
import Router from 'vue-router';

import Home from './views/Home';
import Signin from './views/Signin'
import Register from './views/Register'
import Admin from './views/Admin'

const firebase = require('firebase');

Vue.use(Router)

let router =  new Router({
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home,
      meta:{
        requiresAuth:true
      }
    },
    {
      path: '/signin',
      name: 'signin',
      component: Signin ,
      meta: {
        requiresGuest: true
      }
    },
    {
      path:'/register',
      name:'register',
      component: Register,
      meta: {
        requiresGuest: true
      }
    },
    {
      path:'/admin',
      name:'admin',
      component: Admin,
      meta: {
        requiresGuest: false
      }
    }
  ]
})

router.beforeEach(( to, from, next ) => {
  if(to.matched.some(record => record.meta.requiresAuth)){
    if (!firebase.auth().currentUser) {
      next({
        path:'/signin',
        query:{ 
          redirect:to.fullPath
        }
      });
    }else{
      next();
    }
  }else if (to.matched.some(record => record.meta.requiresGuest)) {
    // Check if NO logged user
    if (firebase.auth().currentUser) {
      // Go to login
      next({
        path: '/',
        query: {
          redirect: to.fullPath
        }
      });
    } else {
      // Proceed to route
      next();
    }
  }else{
    next();
  }
})

export default router;