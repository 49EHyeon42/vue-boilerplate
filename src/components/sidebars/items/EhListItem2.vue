<script setup lang="ts">
import { defineProps } from 'vue';

defineProps<{
  to?: string;
  href?: string;
  target?: string;
  icon?: string;
  title?: string;
}>();
</script>

<template>
  <v-list-item :href="href" :target="target" :to="to">
    <div class="list-item-content d-flex align-center">
      <v-icon>{{ icon }}</v-icon>
      <div class="text-subtitle-2">{{ title }}</div>
    </div>
  </v-list-item>
</template>

<style scoped>
.list-item-content {
  gap: 8px;
}
</style>
