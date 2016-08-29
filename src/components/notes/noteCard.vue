<template lang="html">
    <div class="card">
      <header class="card-header is-full-width">
        <p class="card-header-title">
          {{ note.text }}
        </p>
        <a class="card-header-icon">
          <i class="fa fa-angle-down"></i>
        </a>
      </header>
      <div class="card-content">
        <div class="content">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus nec iaculis mauris. <a href="#">@bulmaio</a>. <a href="#">#css</a> <a href="#">#responsive</a>
          <br>
          <small>11:09 PM - 1 Jan 2016</small>
        </div>
      </div>
      <footer class="card-footer">
        <a class="card-footer-item">Save</a>
        <a class="card-footer-item">Edit</a>
        <a class="card-footer-item">Delete</a>
      </footer>
    </div>
</template>

<script>
export default {
  props: ['note'],
  data () {
    return {
      text: ''
    }
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
