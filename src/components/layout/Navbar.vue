<template lang="html">
  <nav class="nav">
    <div class="container">
      <div class="nav-left">
        <a class="nav-item is-brand" href="/">
          <img src="../../assets/logo.png" alt="Vue logo">
        </a>
      </div>

      <span class="nav-toggle">
        <span></span>
        <span></span>
        <span></span>
      </span>

      <div class="nav-right nav-menu">
        <a class="nav-item" v-link="'/'">
          Home
        </a>
        <a class="nav-item" v-link="'/about'">
          About
        </a>
      </div>
    </div>
  </nav>
</template>

<script>
export default {
  data() {
    return {
    };
  },
  computed: {},
  ready() {},
  attached() {},
  methods: {},
  components: {}
};
</script>

<style lang="css">

</style>
