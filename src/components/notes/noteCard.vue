<template lang="html">
    <div class="card is-fullwidth">
      <header class="card-header ">
        <p class="card-header-title">
          {{ note.text }}
        </p>
        <a class="card-header-icon" v-on:click="$parent.remove(note.id)">
          <i class="fa fa-ban"></i>
        </a>
      </header>
      <div class="card-content">
        <div class="content">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus nec iaculis mauris. <a href="#">@bulmaio</a>. <a href="#">#css</a> <a href="#">#responsive</a>
          <br>
          <small>{{note.datetime}}</small>
        </div>
      </div>
    </div>
</template>

<script>
export default {
  props: ['note'],
  data () {
    return {
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
