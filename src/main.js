import Vue from 'vue';
import App from './App.vue';
import VueRouter from 'vue-router';
//Import components
import About from './components/About.vue';
import Chat from './components/Chat.vue';

Vue.use(VueRouter);

//Initialize router
const router = new VueRouter({
  history: true,
  hashbang: false
});

//Routes
router.map({
    '/about': {
        component: About
    },
    '/chat': {
        component: Chat
    }
});

new Vue({
  el: 'body',
  components: { App }
});

router.start(App, '#app');
