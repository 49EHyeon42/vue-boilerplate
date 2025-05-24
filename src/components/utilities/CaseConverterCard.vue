<script setup lang="ts">
import { computed, defineProps, ref } from 'vue';

const props = defineProps<{
  title: string;
  subTitle: string;
  value: string;
  useToggle?: boolean;
  useUpperCase?: boolean;
}>();

const emit = defineEmits<{
  (e: 'toggleCase'): void;
}>();

const hasCopied = ref(false);

const upperCaseState = computed(() => props.useUpperCase);

const copyTextToClipboard = async (text: string) => {
  await navigator.clipboard.writeText(text);
  hasCopied.value = true;
};

const resetCopyIcon = () => {
  hasCopied.value = false;
};
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
          :text="upperCaseState ? 'UPPER CASE' : 'lower case'"
        >
          <template #activator="{ props: activatorProps }">
            <div v-bind="activatorProps">
              <!-- TODO: 아이콘으로 변경 -->
              <v-switch
                :model-value="props.useUpperCase"
                color="primary"
                hide-details
                @click="emit('toggleCase')"
              />
            </div>
          </template>
        </v-tooltip>
        <v-btn
          icon
          variant="text"
          @click.stop.prevent="copyTextToClipboard(value)"
          @mouseleave="resetCopyIcon"
        >
          <v-icon>{{ !hasCopied ? 'mdi-content-copy' : 'mdi-check' }}</v-icon>
        </v-btn>
      </div>
    </v-card-title>
    <v-text-field :model-value="value" disabled hide-details variant="outlined" class="px-4 py-2" />
  </v-card>
</template>
