import type {Note} from "./models/note"
import {collection, addDoc} from "firebase/firestore"
export const useNotes = defineStore('notes-store',{
    state:()=>({
        notes:[] as Array<Note>
    }),
actions:{
    init(){
        const notes = localStorage.getItem("notes");
        if (notes){
            const parsedNotes = JSON.parse(notes);
            this.notes = parsedNotes;
        }
    },
    async insertNote(note: string){
        const {firestore} = useFirebase();
        try {
           // const docRef = await addDoc(collection(fireStore, "notes"), {
             //   first: "Ada",
               // last: "Lovelace",
               // born: 1815
           // });
           // console.log("Document written with ID: ", docRef.id);
            this.notes.push({
                id: 'ghkhbkjhbjh',
                text: note,
            });
            this.updateLocalStorege();
        } catch (e) {
            console.error("Error adding document: ", e);
        }
    },
    deleteNote(noteId:string):boolean {
        const oldNotes = [...this.notes];
        const noteIdToBeDeleted = oldNotes.findIndex(
            (note)=>note.id === noteId
        )
        if(noteIdToBeDeleted === -1)return false;

        oldNotes.splice(noteIdToBeDeleted,1);
        this.notes = oldNotes;
        this.updateLocalStorege();
        return true;
    },
    updateLocalStorege(){
        localStorage.setItem('notes', JSON.stringify(this.notes));
    },
    editNote(noteId:string, newText:string){
        const repsonse = this.deleteNote(noteId);
        if(repsonse)this.insertNote(newText);
    },
    loadNote(noteId:string){
        return this.notes.find((element)=>element.id == noteId);
    }
},
getters:{
    notesGetter(state){
        return state.notes;
    }
},
});