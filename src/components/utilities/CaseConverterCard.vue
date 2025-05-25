<script setup lang="ts">
import { defineProps, ref } from 'vue';

const props = defineProps<{
  title: string;
  subTitle: string;
  value: string;
  useToggle?: boolean;
  useUpperCase?: boolean;
}>();

const emits = defineEmits<{
  (e: 'toggleCase'): void;
}>();

const hasCopied = ref(false);

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
        <template v-if="useToggle">
          <v-tooltip location="top" :text="!props.useUpperCase ? 'lower case' : 'UPPER CASE'">
            <template #activator="{ props: activatorProps }">
              <v-btn icon variant="text" v-bind="activatorProps" @click.stop="emits('toggleCase')">
                <v-icon>
                  {{
                    !props.useUpperCase
                      ? 'mdi-format-letter-case-lower'
                      : 'mdi-format-letter-case-upper'
                  }}
                </v-icon>
              </v-btn>
            </template>
          </v-tooltip>
        </template>
        <v-btn icon variant="text" @click="copyTextToClipboard(value)" @mouseleave="resetCopyIcon">
          <v-icon>{{ !hasCopied ? 'mdi-content-copy' : 'mdi-check' }}</v-icon>
        </v-btn>
      </div>
    </v-card-title>
    <v-text-field :model-value="value" hide-details readonly variant="outlined" class="px-4 py-2" />
  </v-card>
</template>
