import NotesView from "./NotesView.js";

const app = document.getElementById("app");
const view = new NotesView(app, {
    onNoteSelect(){
        console.log("Notes has been selected");
    }
});
