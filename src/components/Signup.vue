<template lang="html">
  <h2 class="title is-2">Sign Up</h2>
  <hr>
  <label class="label">Username</label>
  <p class="control">
    <input class="input" type="text" placeholder="Enter your username" v-model="credentials.username">
  </p>
  <label class="label">Password</label>
  <p class="control">
    <input class="input" type="password" placeholder="Enter your password" v-model="credentials.password">
  </p>
  <button class="button is-primary" @click="submit()">Submit</button>
</template>

<script>
</script>

<style lang="css">
</style>
