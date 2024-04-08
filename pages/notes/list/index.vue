<script setup lang="ts">
    import { useRouter } from "vue-router";
import { useNotes } from "~/store/notes";
    const notesStore = useNotes();
    const router = useRouter();
</script>
<template>
    <div v-if="notesStore.notesGetter.length == 0">
        <div>Non sono presenti prenotazioni</div>
        <div class="py-2 px-3 bg-red-600 text-white font-bold w-fit mt-3 cursor-pointer" @click="router.push({name:'notes'})">Ritorna a 'Prenotazioni'</div>
    </div>
    <div v-else>
        <NotesElement v-for="note in notesStore.notesGetter" :note="note"></NotesElement>
    </div>
</template>