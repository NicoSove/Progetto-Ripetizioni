<script setup lang="ts">
    import { onMounted } from "vue";
import { useNotes } from "~/store/notes";
    const route = useRoute();
    const text = ref("");
    const notesStore = useNotes();
    const router = useRouter();
    onMounted(()=>{
        const note = notesStore.loadNote(route.params.id as string);
        if(!note){
            router.push({name: 'notes-list'});
            return;
        }
        text.value = note.text;
    });
    function submitNote(){
        if(text.value.trim() == ""){
            alert('Inserire un testo prima di inviare');
            return;
        }
        notesStore.editNote(route.params.id as  string, text.value);
    }
</script>
<template>
    <div class="relative w-fit mt-3 pr-3 pt-3 cursor-pointer" @click="router.push({name: 'notes-list'})">
        <div class="px-5 py-2 bg-red-600 text-white text-center font-bold cursor-pointer w-fit">Visalizza note</div>
        <div v-if="notesStore.notesGetter.length > 0" class="font-bold absolute right-0 top-0 bg-red-500 text-white rounded-full w-10 h-5 flex flex-row justify-center items-center">
            <div class="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">{{ notesStore.notesGetter.length }}</div>
        </div>
    </div>
    <div class="text-xl font-bold mt-3 mb-5">Inserisci qui la tua nota</div>
    <textarea rows="10" class="border w-full" v-model="text"></textarea>
    <div class="py-5 w-full bg-red-600 text-white text-center font-bold cursor-pointer" @click="submitNote()">Inserisci nota</div>
</template>