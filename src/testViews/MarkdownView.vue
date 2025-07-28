<script setup lang="ts">
import { computed, onMounted, ref } from 'vue';

import DOMPurify from 'dompurify';
import MarkdownIt from 'markdown-it';

const textareaRef = ref<HTMLElement | null>(null);

const markdownIt = new MarkdownIt({ html: true });

const input = ref<string>('');

const previewInput = computed(() => DOMPurify.sanitize(markdownIt.render(input.value)));

onMounted(() => {
  textareaRef.value?.focus();
});
</script>

<template>
  <v-container fluid class="h-screen">
    <v-row class="fill-height">
      <v-col md="6">
        <v-textarea
          ref="textareaRef"
          v-model="input"
          variant="outlined"
          no-resize
          hide-details
          class="fill-height"
        />
      </v-col>

      <v-col md="6" class="fill-height">
        <div
          v-html="previewInput"
          class="fill-height overflow-auto"
          style="scrollbar-gutter: stable"
        />
      </v-col>
    </v-row>
  </v-container>
</template>

<style scoped></style>
