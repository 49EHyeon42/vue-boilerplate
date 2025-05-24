<script setup lang="ts">
import BaseSidebar2 from '@/components/sidebars/BaseSidebar2.vue';
import BaseHeader2 from '@/components/headers/BaseHeader2.vue';
import { ref } from 'vue';

const drawer = ref(true);
</script>

<template>
  <BaseSidebar2 v-model:drawer="drawer" />
  <BaseHeader2 @toggle:drawer="drawer = !drawer" />
  <v-main>
    <slot />
  </v-main>
  <v-footer></v-footer>
</template>

<style scoped></style>
