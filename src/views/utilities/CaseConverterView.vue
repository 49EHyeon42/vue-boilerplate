<script setup lang="ts">
import { ref, computed } from 'vue';

import EhLayout2 from '@/layouts/EhLayout2.vue';
import CaseConverterCard from '@/components/utilities/CaseConverterCard.vue';

const inputText = ref<string | null>(null);
const useSnakeUpperCase = ref(false);
const useKebabUpperCase = ref(false);

const camelCase = computed(() => (inputText.value ? convertTextToCamelCase(inputText.value) : ''));
const pascalCase = computed(() =>
  inputText.value ? convertTextToPascalCase(inputText.value) : '',
);
const snakeCase = computed(() =>
  inputText.value
    ? useSnakeUpperCase.value
      ? convertTextToSnakeCase(inputText.value).toUpperCase()
      : convertTextToSnakeCase(inputText.value)
    : '',
);
const kebabCase = computed(() =>
  inputText.value
    ? useKebabUpperCase.value
      ? convertTextToKebabCase(inputText.value).toUpperCase()
      : convertTextToKebabCase(inputText.value)
    : '',
);

const convertTextToCamelCase = (text: string) =>
  text.toLowerCase().replace(/[-_ ]+(\w)/g, (_, c) => c.toUpperCase());

const convertTextToPascalCase = (text: string) => {
  const camelCase = convertTextToCamelCase(text);
  return camelCase.charAt(0).toUpperCase() + camelCase.slice(1);
};

const convertTextToSnakeCase = (text: string) =>
  text
    .replace(/([a-z])([A-Z])/g, '$1_$2')
    .replace(/[- ]+/g, '_')
    .toLowerCase();

const convertTextToKebabCase = (text: string) =>
  text
    .replace(/([a-z])([A-Z])/g, '$1-$2')
    .replace(/[_ ]+/g, '-')
    .toLowerCase();

const toggleSnakeCase = () => (useSnakeUpperCase.value = !useSnakeUpperCase.value);
const toggleKebabCase = () => (useKebabUpperCase.value = !useKebabUpperCase.value);
</script>

<template>
  <EhLayout2>
    <v-container fluid>
      <h1>Case Converter</h1>

      <div class="d-flex flex-column ga-4">
        <v-text-field
          v-model="inputText"
          clearable
          hide-details
          label="Text"
          :maxlength="64"
          variant="outlined"
          class="py-4"
        />

        <CaseConverterCard title="CamelCase" subTitle="카멜 표기법" :value="camelCase" />

        <CaseConverterCard title="PascalCase" subTitle="파스칼 표기법" :value="pascalCase" />

        <CaseConverterCard
          title="snake_case"
          subTitle="스네이크 표기법"
          :value="snakeCase"
          :useToggle="true"
          :useUpperCase="useSnakeUpperCase"
          @toggleCase="toggleSnakeCase"
        />

        <CaseConverterCard
          title="kebab-case"
          subTitle="케밥 표기법"
          :value="kebabCase"
          :useToggle="true"
          :useUpperCase="useKebabUpperCase"
          @toggleCase="toggleKebabCase"
        />
      </div>
    </v-container>
  </EhLayout2>
</template>

<style scoped></style>
