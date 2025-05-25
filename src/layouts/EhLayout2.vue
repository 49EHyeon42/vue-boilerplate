<script setup lang="ts">
import { ref } from 'vue';
import { useDisplay } from 'vuetify';

import Ehsidebar2 from '@/components/sidebars/EhSidebar2.vue';
import EhHeader2 from '@/components/headers/EhHeader2.vue';
import EhFooter2 from '@/components/footers/EhFooter2.vue';

const { mdAndDown } = useDisplay();

const drawer = ref(!mdAndDown.value);
</script>

<template>
  <v-layout>
    <Ehsidebar2 v-model:drawer="drawer" :permanent="!mdAndDown" />
    <EhHeader2 v-model:drawer="drawer" />
    <v-main>
      <slot />
    </v-main>
    <EhFooter2 />
  </v-layout>
</template>

<style scoped></style>
