<template>
  <div class="w-3/4 mx-auto">
    <br />
    <h2 class="text-red-600 font-bold text-3xl text-center py-7">
      Benvenuto nel sito di prenotazioni per ripetizioni ufficiale dell'istituto
      IIS A. Volta di Lodi. Il seguente è il calendario delle disponibilità
    </h2>
    <p>
      {{ formattedDate }}
    </p>
    <table
      class="w-full bg-red-600 text-red-600 border-red-600 border-2 border-solid font-bold"
    >
      <tr
        v-for="(row, index) in rows"
        :key="index"
        class="h-20 border-red-600 border-2 border-solid"
      >
        <td
          v-for="(cell, i) in row"
          :key="i"
          class="border-red-600 border-2 border-solid bg-white text-center"
        >
          <span>{{ cell }}</span>
        </td>
      </tr>
    </table>
    <h2 class="text-red-600 font-bold text-xl text-center py-7">
      Per prenotare una lezione con uno/a dei nostri alunni-professori clicca su
      "prenotazioni"
    </h2>
  </div>
</template>

<script>
export default {
  data() {
    return {
      rows: [
        [
          " Lunedì, 14:30 - 15:30",
          " Martedì, 14:30 - 15:30",
          " Mercoledì, 14:30 - 15:30",
          " Giovedì, 14:30 - 15:30",
          " Venerdì, 14:30 - 15:30",
        ],
        [
          " Lunedì, 15:30 - 16:30",
          " Martedì, 15:30 - 16:30",
          " Mercoledì, 15:30 - 16:30",
          " Giovedì, 15:30 - 16:30",
          " Venerdì, 15:30 - 16:30",
        ],
        [
          " Lunedì, 16:30 - 17:30",
          " Martedì, 16:30 - 17:30",
          " Mercoledì, 16:30 - 17:30",
          " Giovedì, 16:30 - 17:30",
          " Venerdì, 16:30 - 17:30",
        ],
        [
          " Lunedì, 17:30 - 18:30",
          " Martedì, 17:30 - 18:30",
          " Mercoledì, 17:30 - 18:30",
          " Giovedì, 17:30 - 18:30",
          " Venerdì, 17:30 - 18:30",
        ],
      ],
    };
  },
};
</script>
