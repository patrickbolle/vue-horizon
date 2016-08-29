<template lang="html">
  <div>
    <h2 class="title is-2">Notes</h2>
    <hr>
    <div class="has-text-centered">
      <p class="control">
        <input @keyup.enter="takeNote" class="input" type="text" placeholder="Take a note and press enter">
      </p>
      <div class="columns is-multiline">
        <div v-for="note in notes" transition="expand" class="column is-6">
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
   notes.order('datetime', 'descending').watch()
   .subscribe(allNotes => {
       // Make a copy of the array and reverse it, so newest images push into
       // the messages feed from the bottom of the rendered list. (Otherwise
       // they appear initially at the top and move down)
       this.notes = [...allNotes]
     },
     // When error occurs on server
     error => console.log(error)
   )
 },
 methods: {
   takeNote(event) {
     console.log("Take note triggered");
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
   },
   remove(noteId) {
     notes.remove(noteId).subscribe((id) => { console.log(id) });
   }
 },
 components: {
   noteCard
 }
};
</script>

<style lang="css">
/* always present */
.expand-transition {
  transition: all .6s ease;
  padding: 10px;
  overflow: hidden;
}

/* .expand-enter defines the starting state for entering */
/* .expand-leave defines the ending state for leaving */
.expand-enter, .expand-leave {
  height: 0;
  padding: 0 10px;
  opacity: 0;
}
</style>
