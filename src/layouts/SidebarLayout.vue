<script setup lang="ts">
import HeaderWithSidebar from '@/components/headers/HeaderWithSidebar.vue';
import BaseSidebar from '@/components/sidebars/BaseSidebar.vue';
import { ref } from 'vue';

const drawer = ref(false);
</script>

<template>
  <HeaderWithSidebar v-model:drawer="drawer" />
  <BaseSidebar v-model:drawer="drawer" />
  <v-main>
    <slot />
  </v-main>
  <v-footer></v-footer>
</template>

<style scoped></style>
