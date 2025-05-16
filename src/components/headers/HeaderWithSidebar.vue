<script setup lang="ts">
import { useRouter } from 'vue-router';
import { useToggleTheme } from '@/composables/useToggleTheme';

const router = useRouter();
const toggleTheme = useToggleTheme();

const drawer = defineModel<boolean>('drawer');
</script>

<template>
  <v-app-bar>
    <template v-slot:prepend>
      <v-app-bar-nav-icon @click="drawer = !drawer" />
    </template>
    <v-app-bar-title @click="router.push('/')">49EHyeon42</v-app-bar-title>
    <template v-slot:append>
      <v-btn icon @click="toggleTheme">
        <v-icon>mdi-theme-light-dark</v-icon>
      </v-btn>
    </template>
  </v-app-bar>
</template>
