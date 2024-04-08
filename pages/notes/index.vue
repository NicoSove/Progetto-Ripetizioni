<template>
  <p>
    <h1 class="text-red-600 text-2xl font-bold text-center"> Questa è la pagina dedicata alla prenotazione riservata agli alunni </h1>
  </p>
  <br />
  <form @submit.prevent="submitNote" class="m-auto text-center">
    <h1 class="text-red-600 text-2xl font-bold py-3">
      1) Scegliere un giorno:
    </h1>
    <table
      class="bg-red-600 text-white w-1/2 h-20 m-auto text-center border-red-600 border-2 border-solid font-bold cursor-pointer"
    >
      <tr>
        <template v-for="(day, index) in giorni" :key="index">
          <td
            :class="{ 'bg-white text-red-600': activeCellIndex1 === index }"
            @click="setActiveCell1(index)"
            class="border-2 border-solid hover:text-red-600 hover:bg-white transition duration-150 ease-out hover:ease-in"
          >
            {{ day }}
          </td>
        </template>
      </tr>
    </table>
    <br />
    <h1 class="text-red-600 font-bold text-2xl py-3">
      2) Scegliere un orario:
    </h1>
    <table
      class="w-1/2 h-20 m-auto text-center border-red-600 border-2 border-solid bg-red-600 text-white font-bold cursor-pointer"
    >
      <tr>
        <template v-for="(time, index) in ore" :key="index">
          <td
            :class="{ 'bg-white text-red-600': activeCellIndex2 === index }"
            @click="setActiveCell2(index)"
            class="border-2 border-solid hover:text-red-600 hover:bg-white transition duration-150 ease-out hover:ease-in"
          >
            {{ time }}
          </td>
        </template>
      </tr>
    </table>
    <br />
    <div class="flex flex-col items-center justify-center">
      <h1 class="text-red-600 font-bold text-2xl py-3">
        3) Inserire il proprio cognome:
      </h1>
      <textarea
        v-model.trim="text"
        class="border-red-600 text-center h-10 border-2 border-solid bg-red-600 text-white placeholder:text-white hover:placeholder:text-red-600 font-bold cursor-pointer hover:text-red-600 hover:bg-white transition duration-150 ease-out hover:ease-in resize-none"
        id="nome"
        name="nome"
        rows="1"
        cols="40"
        placeholder="Cognome"
      ></textarea>
      <br /><br />
      <button
        type="submit"
        class="w-40 h-20 m-auto text-center border-2 border-solid bg-red-600 text-white font-bold cursor-pointer hover:text-gray-300"
      >
        Inserisci Prenotazione
      </button>
    </div>
  </form>
</template>

<script setup lang="ts">
import { useNotes } from "~/store/notes";
import { ref } from "vue";

const text = ref("");
const notesStore = useNotes();

const giorni = ["Lunedì", "Martedì", "Mercoledì", "Giovedì", "Venerdì"];
const ore = [
  "14:30 - 15:30",
  "15:30 - 16:30",
  "16:30 - 17:30",
  "17:30 - 18:30",
];

const activeCellIndex1 = ref(-1);
const activeCellIndex2 = ref(-1);

function setActiveCell1(index: number) {
  activeCellIndex1.value = index === activeCellIndex1.value ? -1 : index;
}

function setActiveCell2(index: number) {
  activeCellIndex2.value = index === activeCellIndex2.value ? -1 : index;
}

function submitNote() {
  if (activeCellIndex1.value === -1) {
    alert("Seleziona un giorno prima di prenotare l'appuntamento.");
    return;
  }
  if (activeCellIndex2.value === -1) {
    alert("Seleziona un orario prima di prenotare l'appuntamento.");
    return;
  }
  if (!text.value.trim()) {
    alert("Inserisci il cognome prima di prenotare l'appuntamento.");
    return;
  }
  notesStore.insertNote(text.value);
  text.value = "";

  activeCellIndex1.value = -1;
  activeCellIndex2.value = -1;

  alert("Appuntamento prenotato con successo!");
}
</script>
