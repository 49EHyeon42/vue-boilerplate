<script setup lang="ts">
import BaseHeader2 from '@/components/headers/BaseHeader2.vue';
import Ehsidebar2 from '@/components/sidebars/Ehsidebar2.vue';
</script>

<template>
  <v-layout>
    <Ehsidebar2 />
    <BaseHeader2 />
    <v-main>
      <slot />
    </v-main>
    <v-footer app></v-footer>
  </v-layout>
</template>

<style scoped></style>
