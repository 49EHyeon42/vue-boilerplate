<script setup lang="ts">
import { computed, onMounted, ref } from 'vue';

import DOMPurify from 'dompurify';
import MarkdownIt from 'markdown-it';

const textareaRef = ref<HTMLElement | null>(null);

const markdownIt = new MarkdownIt({ html: true });

const input = ref<string>('');
const previewInput = computed(() => DOMPurify.sanitize(markdownIt.render(input.value)));

const tab = ref<number>(1);

onMounted(() => {
  textareaRef.value?.focus();
});
</script>

<template>
  <v-container fluid class="h-screen">
    <v-tabs v-model="tab" bg-color="primary">
      <v-tab :value="1">입력</v-tab>
      <v-tab :value="2">미리보기</v-tab>
    </v-tabs>

    <v-tabs-window v-model="tab" style="height: calc(100% - 32px)">
      <v-tabs-window-item :value="1" class="fill-height">
        <v-textarea
          ref="textareaRef"
          v-model="input"
          variant="outlined"
          no-resize
          hide-details
          class="fill-height"
        />
      </v-tabs-window-item>

      <v-tabs-window-item :value="2" class="fill-height">
        <div
          v-html="previewInput"
          class="fill-height overflow-auto"
          style="scrollbar-gutter: stable"
        />
      </v-tabs-window-item>
    </v-tabs-window>
  </v-container>
</template>

<style scoped></style>
