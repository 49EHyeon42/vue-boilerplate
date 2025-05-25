<script setup lang="ts">
import { defineProps } from 'vue';

const props = defineProps<{
  title: string;
}>();
</script>

<template>
  <v-container class="d-flex align-center pa-2 sub-header-gap">
    <span class="text-subtitle-1 text-no-wrap">{{ props.title }}</span>
    <v-divider />
  </v-container>
</template>

<style scoped>
.sub-header-gap {
  gap: 8px;
}
</style>
