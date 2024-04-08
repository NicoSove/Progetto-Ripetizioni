import { useNotes } from '~/store/notes';
export default defineNuxtRouteMiddleware((to, from)=>{
   const notesStore = useNotes();
   notesStore.init(); 
});