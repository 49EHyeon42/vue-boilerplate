<script setup lang="ts">
import { useDisplay } from 'vuetify';
import { useToggleTheme } from '@/composables/useToggleTheme';

const { mdAndDown } = useDisplay();
const toggleTheme = useToggleTheme();

const drawer = defineModel<boolean>('drawer');
</script>

<template>
  <v-app-bar elevation="0">
    <template v-if="mdAndDown">
      <v-app-bar-nav-icon @click="drawer = !drawer" />
      <v-app-bar-title>49EHyeon42</v-app-bar-title>
    </template>
    <template v-slot:append>
      <v-btn icon @click="toggleTheme">
        <v-icon>mdi-theme-light-dark</v-icon>
      </v-btn>
    </template>
  </v-app-bar>
</template>
