<script setup lang="ts">
    import type {Note} from "~/store/models/note";
    import {useNotes} from "~/store/notes";
    defineProps({note: {required: true, type: Object as PropType<Note>}});
    const router = useRouter();
    const notesStore = useNotes();
</script>
<template>
    <div class="border p-5 rounded-lg drop-shadow-md bg-white cursor-pointer flex flex-row justify-between" @click="router.push({name: 'notes-id', params: {id: note.id}})">
        <div>{{ note.text }}</div>
        <div class="bg-red-600 p-2 text-white font-bold" @click.stop="notesStore.deleteNote(note.id)">Cancella appuntamento</div>
    </div>
</template>