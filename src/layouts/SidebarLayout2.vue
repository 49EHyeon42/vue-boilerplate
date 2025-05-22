<script setup lang="ts">
import BaseSidebar2 from '@/components/sidebars/BaseSidebar2.vue';
import BaseHeader from '@/components/headers/BaseHeader.vue';
</script>

<template>
  <BaseSidebar2 />
  <BaseHeader />
  <v-main>
    <slot />
  </v-main>
  <v-footer></v-footer>
</template>

<style scoped></style>
