<template>
  <div id="app">
    <navbar></navbar>
    <div class="container">
      <router-view></router-view>
    </div>
    <nav-foot></nav-foot>
  </div>
</template>

<script>
import Navbar from './components/layout/Navbar.vue';
import NavFoot from './components/layout/NavFoot.vue';

export default {
  components: {
    Navbar,
    NavFoot
  }
}
</script>

<style>
@import "../node_modules/bulma/css/bulma.css";
@import "./assets/styles.css";
</style>
