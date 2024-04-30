export default class NotesView {
  constructor(
    root,
    { onNoteSelect, onNoteAdd, onNoteEdit, onNoteDelete } = {}
  ) {
    this.root = root;
    this.onNoteSelect = onNoteSelect;
    this.onNoteAdd = onNoteAdd;
    this.onNoteEdit = onNoteEdit;
    this.onNoteDelete = onNoteDelete;
    this.root.innerHTML = `
    <div class="notes_sidebar">
        <button class="notes_add" type="button">Add Note</button>
        <div class="notes_list">
          </div>
        </div>
      </div>
      <div class="notes_preview">
        <input
          class="notes_title"
          type="text"
          placeholder="New Note ..."
        />
        <textarea class="notes_body">Take Note ...</textarea>
      </div>`;
  }
}
