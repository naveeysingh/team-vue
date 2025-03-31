const app = Vue.createApp({
    data() {
      return {
        notes: [],
        newNoteTitle: '',
        newNoteContent: ''
      };
    },
    methods: {
      // Create a new note
      addNote() {
        const newNote = {
          id: Date.now(), // Unique ID based on timestamp
          title: this.newNoteTitle,
          content: this.newNoteContent,
          editing: false
        };
        this.notes.push(newNote);
        // Reset form fields
        this.newNoteTitle = '';
        this.newNoteContent = '';
      },
      // Delete a note based on its index
      deleteNote(index) {
        this.notes.splice(index, 1);
      },
      // Enable edit mode for a note
      editNote(note) {
        note.editing = true;
      },
      // Save the updated note and exit edit mode
      updateNote(note) {
        note.editing = false;
      },
      // Cancel editing without saving changes
      cancelEdit(note) {
        note.editing = false;
      }
    }
  });
  
  app.mount('#app');
  