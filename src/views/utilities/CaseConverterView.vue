<script setup lang="ts">
import SidebarLayout2 from '@/layouts/SidebarLayout2.vue';
import { ref, computed } from 'vue';

const inputText = ref('');

// 변환 로직
const toCamelCase = (text: string) =>
  text.toLowerCase().replace(/[-_ ]+(\w)/g, (_, c) => c.toUpperCase());

const toPascalCase = (text: string) => {
  const camel = toCamelCase(text);
  return camel.charAt(0).toUpperCase() + camel.slice(1);
};

const toSnakeCase = (text: string) =>
  text
    .replace(/([a-z])([A-Z])/g, '$1_$2')
    .replace(/[- ]+/g, '_')
    .toLowerCase();

const toKebabCase = (text: string) =>
  text
    .replace(/([a-z])([A-Z])/g, '$1-$2')
    .replace(/[_ ]+/g, '-')
    .toLowerCase();

const camelCase = computed(() => toCamelCase(inputText.value));
const pascalCase = computed(() => toPascalCase(inputText.value));
const snakeCase = computed(() => toSnakeCase(inputText.value));
const kebabCase = computed(() => toKebabCase(inputText.value));

const copyToClipboard = (text: string) => {
  navigator.clipboard.writeText(text).then(() => {
    console.log('Copied:', text);
  });
};
</script>

<template>
  <SidebarLayout2>
    <v-container>
      <v-card class="pa-4">
        <v-card-title>Case Converter</v-card-title>

        <v-text-field v-model="inputText" label="Enter text" outlined dense />

        <v-divider class="my-4" />

        <v-list dense>
          <v-list-item>
            <v-list-item-title>CamelCase</v-list-item-title>
            <v-list-item-subtitle>{{ camelCase }}</v-list-item-subtitle>
            <v-btn icon size="small" @click="copyToClipboard(camelCase)">
              <v-icon>mdi-content-copy</v-icon>
            </v-btn>
          </v-list-item>

          <v-list-item>
            <v-list-item-title>PascalCase</v-list-item-title>
            <v-list-item-subtitle>{{ pascalCase }}</v-list-item-subtitle>
            <v-btn icon size="small" @click="copyToClipboard(pascalCase)">
              <v-icon>mdi-content-copy</v-icon>
            </v-btn>
          </v-list-item>

          <v-list-item>
            <v-list-item-title>snake_case</v-list-item-title>
            <v-list-item-subtitle>{{ snakeCase }}</v-list-item-subtitle>
            <v-btn icon size="small" @click="copyToClipboard(snakeCase)">
              <v-icon>mdi-content-copy</v-icon>
            </v-btn>
          </v-list-item>

          <v-list-item>
            <v-list-item-title>kebab-case</v-list-item-title>
            <v-list-item-subtitle>{{ kebabCase }}</v-list-item-subtitle>
            <v-btn icon size="small" @click="copyToClipboard(kebabCase)">
              <v-icon>mdi-content-copy</v-icon>
            </v-btn>
          </v-list-item>
        </v-list>
      </v-card>
    </v-container>
  </SidebarLayout2>
</template>

<style scoped>
.v-list-item {
  align-items: center;
}
</style>
