<script setup lang="ts">
import { useRouter } from 'vue-router';
import { useToggleTheme } from '@/composables/useToggleTheme';
import { useDisplay } from 'vuetify';

const emit = defineEmits(['toggle:drawer']);

const router = useRouter();
const toggleTheme = useToggleTheme();
const { mdAndDown } = useDisplay();
</script>

<template>
  <v-app-bar>
    <v-app-bar-nav-icon v-if="mdAndDown" @click="emit('toggle:drawer')" />
    <v-app-bar-title @click="router.push('/')">49EHyeon42</v-app-bar-title>
    <template v-slot:append>
      <v-btn icon @click="toggleTheme">
        <v-icon>mdi-theme-light-dark</v-icon>
      </v-btn>
    </template>
  </v-app-bar>
</template>
