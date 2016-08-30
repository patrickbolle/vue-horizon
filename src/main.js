import Vue from 'vue';
import App from './App.vue';
import VueRouter from 'vue-router';
import VueResource from 'vue-resource';
//Import components
import About from './components/About.vue';
import Notes from './components/Notes.vue';
import Signup from './components/Signup.vue';
import Login from './components/Login.vue';

//Initialize Router
Vue.use(VueRouter);
Vue.use(VueResource);

//Pass some options to router
const router = new VueRouter({
  history: true,
  hashbang: false
});

//Routes
router.map({
    '/': {
        component: Notes
    },
    '/about': {
        component: About
    },
    '/login': {
      component: Login
    },
    '/signup': {
      component: Signup
    }
});

//Wildcard Redirects
router.redirect({
  '*': '/notes'
});

//Start the router in te #app div in index.html
router.start(App, '#app');
