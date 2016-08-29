<template lang="html">
  <div>
    <h2 class="title is-2">Notes</h2>
    <hr>
    <div class="has-text-centered">
      <p class="control">
        <input @keyup.enter="takeNote" class="input" type="text" placeholder="Take a note and press enter">
      </p>
      <div class="columns">
        <div v-for="note in notes" class="column is-half">
            <note-card :note="note"></note-card>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Horizon from '@horizon/client';
import noteCard from './notes/noteCard.vue';
// Specify the host property for the Horizon connection + connect to Horizon
const horizon = Horizon({host: 'localhost:8181'});
horizon.connect();
//Create messages collection
const notes = horizon('notes');

//Vue Component Start
export default {
  data() {
    return {
      notes: []
    };
  },
  created() {
   // Subscribe to messages
   notes.order('datetime', 'ascending').watch()
   .subscribe(allNotes => {
     },
     // When error occurs on server
     error => console.log(error)
   )
 },
 methods: {
   takeNote(event) {
     notes.store({
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
 },
 components: {
   noteCard
 }
};
</script>

<style lang="css">
</style>
