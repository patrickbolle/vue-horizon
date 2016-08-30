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
        <a class="nav-item" @click="login()" v-show="!authenticated">
          Login / Sign Up
        </a>
        <a class="nav-item" @click="logout()" v-show="authenticated">
          Logout
        </a>
      </div>
    </div>
  </nav>
</template>

<script>
export default {
  data() {
    return {
      authenticated: false,
      lock: new Auth0Lock('tgJLuBATKKpx5GfEERCvlYhBRYaWryJs', 'bolle.auth0.com')
    }
  },
  // Check the user's auth status when the app
  // loads to account for page refreshing
  created() {
    var self = this;
     this.authenticated = checkAuth();
     this.lock.on("authenticated", function(authResult) {
       self.lock.getProfile(authResult.idToken, function(error, profile) {
         if (error) {
           // Handle error
           return;
         }

         localStorage.setItem('id_token', authResult.idToken);
         localStorage.setItem('profile', JSON.stringify(profile));
         self.authenticated = true;
         self.lock.hide();
       });
     });
  },
  methods: {
    login() {
      var self = this;
      var lock = new Auth0Lock('tgJLuBATKKpx5GfEERCvlYhBRYaWryJs', 'bolle.auth0.com');

      lock.show((err, profile, token) => {
        if(err) {
          // Handle the error
          console.log(err)
        } else {
          // Set the token and user profile in local storage
          localStorage.setItem('profile', JSON.stringify(profile));
          localStorage.setItem('id_token', token);
          self.authenticated = true;
          console.log("LOGGING IN");
        }
      });
    },
    logout() {
      console.log("Logout triggered");
      var self = this;
      // To log out, we just need to remove the token and profile
      // from local storage
      localStorage.removeItem('id_token');
      localStorage.removeItem('profile');
      self.authenticated = false;
      console.log(self.authenticated);
    },
  },
  components: {}
};
// Utility to check auth status
function checkAuth() {
  console.log("checkAuth triggered");
  if(localStorage.getItem('id_token')) {
    return true;
    console.log("Logged in");
  } else {
    return false;
  }
}
</script>

<style lang="css">
</style>
