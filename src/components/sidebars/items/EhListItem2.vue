<script setup lang="ts">
import { defineProps, computed } from 'vue';

const props = defineProps<{
  depth?: number;
  to?: string;
  href?: string;
  target?: string;
  icon?: string;
  title?: string;
}>();

const paddingLeft = computed(() => `${16 + (props.depth ?? 0) * 16}px`);
</script>

<template>
  <v-list-item :href="href" :target="target" :to="to" :style="{ paddingLeft }">
    <div class="d-flex align-center list-item-content">
      <v-icon>{{ icon }}</v-icon>
      <div class="text-subtitle-2">{{ title }}</div>
    </div>

    <template #append v-if="$slots.append">
      <slot name="append" />
    </template>
  </v-list-item>
</template>

<style scoped>
.list-item-content {
  gap: 8px;
}
</style>
