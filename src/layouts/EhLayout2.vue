<script setup lang="ts">
import Ehsidebar2 from '@/components/sidebars/EhSidebar2.vue';
import EhHeader2 from '@/components/headers/EhHeader2.vue';

import { ref } from 'vue';
import { useDisplay } from 'vuetify';

const { mdAndDown } = useDisplay();

const drawer = ref<boolean>(true);
</script>

<template>
  <v-layout>
    <Ehsidebar2 v-model:drawer="drawer" :permanent="!mdAndDown" :temporary="mdAndDown" />
    <EhHeader2 v-model:drawer="drawer" />
    <v-main>
      <slot />
    </v-main>
    <v-footer app />
  </v-layout>
</template>

<style scoped></style>
