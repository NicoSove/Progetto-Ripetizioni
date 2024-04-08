import type { pushScopeId } from 'vue'; import type { routerKey } from
'vue-router'; import type { routerKey } from 'vue-router';
<script setup lang="ts">
const router = useRouter();
</script>

<template>
  <div class="bg-red-600 drop-shadow-sm py-6 px-10 border-black w-full flex flex-row items-center">
    <div class="text-2xl font-bold text-white">
      Calendario Ripetizioni Scolastiche IIS A. Volta
    </div>
    <div class="text-white flex flex-row gap-4 flex-1 justify-end">
        <div @click="router.push({ name: 'index' })" class="px-5 hover:text-gray-300 font-bold duration-300 transition-all cursor-pointer">Home</div>
        <div @click="router.push({ name: 'notes' })" class="px-5 text-white hover:text-gray-300 font-bold duration-300 transition-all cursor-pointer">Prenota</div>
        <div @click="router.push({ name: 'dispo' })" class="px-5 text-white hover:text-gray-300 font-bold duration-300 transition-all cursor-pointer">Renditi disponibile</div>
    </div>
  </div>
</template>