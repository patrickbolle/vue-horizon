<template>
  <div id="app">
    <div id="chatMessages">
      <ul>
        <li v-for="message in messages">
          {{ message.text }}
        </li>
      </ul>
    </div>
    <div id="input">
      <input @keyup.enter="sendMessage" ></input>
    </div>
  </div>
</template>

<script>
import Horizon from '@horizon/client';

// Specify the host property for initializing the Horizon connection
const horizon = Horizon({host: 'localhost:8181'});
//Connect to horizon
horizon.connect();
//Create messages collection
const messages = horizon('messages')

export default {
  data() {
    return {
      // Our dynamic list of chat messages
      messages: []
    };
  },
  created() {
   // Subscribe to messages
   messages.order('datetime', 'descending').limit(10).watch()
   .subscribe(allMessages => {
       // Make a copy of the array and reverse it, so newest images push into
       // the messages feed from the bottom of the rendered list. (Otherwise
       // they appear initially at the top and move down)
       this.messages = [...allMessages].reverse()
     },
     // When error occurs on server
     error => console.log(error)
   )

   // Triggers when client successfully connects to server
   horizon.onReady().subscribe(
     () => console.log("Connected to Horizon server")
   )

   // Triggers when disconnected from server
   horizon.onDisconnected().subscribe(
     () => console.log("Disconnected from Horizon server")
   )
 },
 methods: {
   sendMessage(event) {
     messages.store({
       text: event.target.value, // Current value inside <input> tag
       datetime: new Date() // Warning clock skew!
     }).subscribe(
         // Returns id of saved objects
         result => console.log(result),
         // Returns server error message
         error => console.log(error)
       )
       // Clear input for next message
       event.target.value = ''
   }
 }
}
</script>

<style>
</style>
