<script setup lang="ts">
import { useThemeStore } from '@/stores/theme';

import EhBrand from '@/components/common/EhBrand.vue';

const themeStore = useThemeStore();

const drawer = defineModel<boolean>('drawer');
</script>

<template>
  <v-app-bar density="compact" elevation="0">
    <template v-if="$vuetify.display.mdAndDown">
      <v-app-bar-nav-icon @click="drawer = !drawer" />
      <v-app-bar-title>
        <EhBrand />
      </v-app-bar-title>
    </template>
    <template v-slot:append>
      <v-btn icon @click="themeStore.toggleTheme">
        <v-icon size="x-large">{{
          themeStore.isDark ? 'mdi-weather-night' : 'mdi-white-balance-sunny'
        }}</v-icon>
      </v-btn>
    </template>
  </v-app-bar>
</template>

<style scoped></style>
