<script setup lang="ts">
import { onMounted, onUnmounted, ref } from 'vue';
import { useDisplay } from 'vuetify';

import Ehsidebar2 from '@/components/sidebars/EhSidebar2.vue';
import EhHeader2 from '@/components/headers/EhHeader2.vue';
import EhFooter2 from '@/components/footers/EhFooter2.vue';

const { mdAndDown } = useDisplay();

const drawer = ref(!mdAndDown.value);
const showScrollToTopButton = ref(false);

const scrollToTop = () => {
  window.scrollTo({ top: 0, behavior: 'smooth' });
};

const handleScrollEvent = () => {
  showScrollToTopButton.value = window.scrollY > 0;
};

onMounted(() => {
  window.addEventListener('scroll', handleScrollEvent);
});

onUnmounted(() => {
  window.removeEventListener('scroll', handleScrollEvent);
});
</script>

<template>
  <v-layout>
    <Ehsidebar2 v-model:drawer="drawer" :permanent="!mdAndDown" />
    <EhHeader2 v-model:drawer="drawer" />
    <v-main>
      <slot />
    </v-main>
    <EhFooter2 />

    <!-- scroll to top button -->
    <!-- footer 때문에 z-index: 905 사용 -->
    <v-slide-y-reverse-transition>
      <v-btn
        v-if="showScrollToTopButton"
        color="primary"
        icon="mdi-chevron-up"
        location="bottom end"
        position="fixed"
        size="x-small"
        class="ma-3"
        style="z-index: 905"
        @click="scrollToTop"
      ></v-btn>
    </v-slide-y-reverse-transition>
  </v-layout>
</template>

<style scoped></style>
