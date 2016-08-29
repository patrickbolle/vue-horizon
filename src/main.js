import Vue from 'vue';
import App from './App.vue';
import VueRouter from 'vue-router';
//Import components
import About from './components/About.vue';
import Notes from './components/Notes.vue';

//Initialize Router
Vue.use(VueRouter);

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
    }
});

//Wildcard Redirects
router.redirect({
  '*': '/notes'
});

//Start the router in te #app div in index.html
router.start(App, '#app');
