<script setup lang="ts">
import { defineProps } from 'vue';

const props = defineProps<{
  title: string;
  subTitle: string;
  value: string;
  useToggle?: boolean;
  isUpperCase?: boolean;
}>();

const emit = defineEmits<{
  (e: 'copyTextToClipboard'): void;
  (e: 'toggleCase'): void;
}>();
</script>

<template>
  <v-card>
    <v-card-title class="d-flex align-center justify-space-between">
      <div class="d-flex align-center" style="gap: 8px">
        <span>{{ title }}</span>
        <small class="text-grey">{{ subTitle }}</small>
      </div>
      <div class="d-flex align-center">
        <v-tooltip
          v-if="useToggle"
          location="top"
          :text="props.isUpperCase ? 'UPPER CASE' : 'lower case'"
        >
          <template #activator="{ props: activatorProps }">
            <div v-bind="activatorProps">
              <v-switch
                :model-value="props.isUpperCase"
                color="primary"
                hide-details
                @click="emit('toggleCase')"
              />
            </div>
          </template>
        </v-tooltip>
        <v-btn icon variant="text" @click.stop.prevent="emit('copyTextToClipboard')">
          <v-icon>mdi-content-copy</v-icon>
        </v-btn>
      </div>
    </v-card-title>
    <v-text-field :model-value="value" disabled hide-details variant="outlined" class="px-4 py-2" />
  </v-card>
</template>
