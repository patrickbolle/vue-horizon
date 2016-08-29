<template>
  <div id="app">
    <navbar></navbar>
    <div class="container main">
      <router-view></router-view>
      <nav-foot></nav-foot>
    </div>
  </div>
</template>

<script>
import Navbar from './components/layout/Navbar.vue';
import NavFoot from './components/layout/NavFoot.vue';
import Horizon from '@horizon/client';
// Specify the host property for the Horizon connection + connect to Horizon
const horizon = Horizon({host: 'localhost:8181'});
horizon.connect();

export default {
  components: {
    Navbar,
    NavFoot
  },
  created() {
    // Triggers when client successfully connects to server
    horizon.onReady().subscribe(
      () => console.log("Connected to Horizon server")
    )
    // Triggers when disconnected from server
    horizon.onDisconnected().subscribe(
      () => console.log("Disconnected from Horizon server")
    )
  }
}
</script>

<style>
@import "../node_modules/bulma/css/bulma.css";
@import "./assets/styles.css";
</style>
