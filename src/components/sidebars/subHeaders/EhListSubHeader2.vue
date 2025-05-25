<script setup lang="ts">
import { defineProps } from 'vue';

const props = defineProps<{
  title: string;
}>();
</script>

<template>
  <v-container class="d-flex align-center ga-2 pa-2">
    <span class="text-subtitle-1 text-no-wrap">{{ props.title }}</span>
    <v-divider />
  </v-container>
</template>

<style scoped></style>
