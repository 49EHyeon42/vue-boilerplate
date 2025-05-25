<script setup lang="ts">
import { useRouter } from 'vue-router';

const router = useRouter();
</script>

<template>
  <div class="d-flex align-center cursor-pointer ga-2" @click="router.push('/')">
    <v-icon size="32">mdi-debian</v-icon>
    <span class="text-h6">49EHyeon42</span>
  </div>
</template>

<style scoped></style>
